import { BlogTypePipe } from './blog-type.pipe';

describe('BlogTypePipe', () => {
  it('create an instance', () => {
    const pipe = new BlogTypePipe();
    expect(pipe).toBeTruthy();
  });
});
