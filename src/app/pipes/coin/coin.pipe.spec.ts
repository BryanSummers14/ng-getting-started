import { CoinPipe } from './coin.pipe';

describe('CoinPipe', () => {
  it('create an instance', () => {
    const pipe = new CoinPipe();
    expect(pipe).toBeTruthy();
  });
});
