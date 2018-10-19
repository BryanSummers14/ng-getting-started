import { Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title = 'Pipes';
  users$: Observable<object>;
  multiplier = 12;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }

}
