import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coin'
})
export class CoinPipe implements PipeTransform {

  transform(value: any, arg1: number, arg2: string): any {
    if (!Boolean(value)) {
      return '';
    }
    const key = Object.keys(value[arg1])[0];
    return value[arg1][key][arg2];
  }

}
