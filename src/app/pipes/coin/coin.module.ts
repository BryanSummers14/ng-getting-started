import { CoinPipe } from './coin.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoinPipe],
  exports: [CoinPipe]
})
export class CoinModule { }
