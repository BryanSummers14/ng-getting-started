import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleToggleDirective } from './role-toggle.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RoleToggleDirective],
  exports: [RoleToggleDirective]
})
export class RoleToggleModule { }
