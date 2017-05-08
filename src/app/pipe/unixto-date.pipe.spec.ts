import { UnixtoDatePipe } from './unixto-date.pipe';

describe('UnixtoDatePipe', () => {
  it('create an instance', () => {
    const pipe = new UnixtoDatePipe();
    expect(pipe).toBeTruthy();
  });
});
