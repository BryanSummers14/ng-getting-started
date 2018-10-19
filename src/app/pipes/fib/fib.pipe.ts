import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fib',
  pure: true
})
export class FibPipe implements PipeTransform {

  transform(value: number): number {
    return value * 10;
  }

  fibonacci(num: number): number {
    if (num === 1 || num === 2) {
      return 1;
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }

}
