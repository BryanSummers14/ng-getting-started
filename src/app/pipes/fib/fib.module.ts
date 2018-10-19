import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibPipe } from './fib.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FibPipe],
  exports: [FibPipe]
})
export class FibModule { }
