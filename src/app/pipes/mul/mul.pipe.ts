import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mul',
  pure: true
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    return Boolean(args) ? value * args : value * 10;
  }

}
