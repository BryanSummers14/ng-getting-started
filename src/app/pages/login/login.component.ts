import { Component, OnInit, ViewChild, ViewEncapsulation, HostListener, ElementRef } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  hasError = false;

  @ViewChild('username') _username: ElementRef;
  @ViewChild('password') _password: ElementRef;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.handleLogin(this._username.nativeElement.value, this._password.nativeElement.value);
    }
  }


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  handleLogin(username, password) {
    this.authService.login(username, password).subscribe(_res => {
      this.router.navigate(['home']);
    },
     err => this.hasError = true);
  }

}
