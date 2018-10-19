import { GrowDirective } from './grow.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GrowDirective],
  exports: [GrowDirective]
})
export class GrowModule { }
