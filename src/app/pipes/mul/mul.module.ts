import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplyPipe } from './mul.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiplyPipe],
  exports: [MultiplyPipe]
})
export class MultiplyPipeModule { }
