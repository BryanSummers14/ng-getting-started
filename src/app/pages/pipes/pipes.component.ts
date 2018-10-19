import { Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import { UsersService } from '@services/users.service';

@Component({
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title = 'Pipes';
  users = [];

  @ViewChild('newUser') userInput: ElementRef;
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addNewUser(this.userInput.nativeElement);
    }
  }

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((_res: Array<any>) => {
      this.users = _res;
    });
  }

  addNewUser(input: HTMLInputElement) {
    if (input.value.length === 0) {
      return;
    }
    const username = input.value.split(' ');
    const user = {
      firstName: username[0],
      lastName: username[1] || username[0],
      salaryBase: Math.floor(Math.random() * 50)
    };
    this.users.unshift(user);
    input.value = '';
  }

}
