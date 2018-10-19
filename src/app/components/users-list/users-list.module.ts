import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { MatCardModule } from '@angular/material';
import { MultiplyPipeModule } from '@pipes/mul/mul.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MultiplyPipeModule
  ],
  declarations: [UsersListComponent],
  exports: [UsersListComponent]
})
export class UsersListModule { }
