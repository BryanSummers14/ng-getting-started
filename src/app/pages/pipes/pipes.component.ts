import { Component, OnInit, ElementRef } from '@angular/core';
import { UsersService } from '@services/users.service';

@Component({
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title = 'Pipes';
  users = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((_res: Array<any>) => {
      this.users = _res;
    });
  }

  addNewUser(input: HTMLInputElement) {
    const username = input.value;
    const user = {
      firstName: username,
      lastName: 'last name',
      salaryBase: Math.floor(Math.random() * 5)
    };
    this.users.push(user);
    input.value = '';
  }

}
