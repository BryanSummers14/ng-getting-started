import { FibPipe } from './fib.pipe';

describe('FibPipe', () => {
  it('create an instance', () => {
    const pipe = new FibPipe();
    expect(pipe).toBeTruthy();
  });
});
