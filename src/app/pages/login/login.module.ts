import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';

const route: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(route)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
