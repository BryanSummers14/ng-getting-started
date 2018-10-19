import { MultiplyPipe } from './mul.pipe';

describe('FibPipe', () => {
  it('create an instance', () => {
    const pipe = new MultiplyPipe();
    expect(pipe).toBeTruthy();
  });
});
