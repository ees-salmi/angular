import { TransformDatePipe } from './transform-date.pipe';

describe('TransformDatePipe', () => {
  let pipe: TransformDatePipe;

  beforeEach(() => {
    pipe = new TransformDatePipe();
  });
  it('create an instance', () => {
    //const pipe = new TransformDatePipe();
    expect(pipe).toBeTruthy();
  });
  it('should transform a date to the format "Month Day, Year"', () => {
    const date = new Date('2024-02-22');
    const transformedDate = pipe.transform(date);
    expect(transformedDate).toBe('February 22, 2024');
  });

  it('should handle null input gracefully', () => {
    const transformedDate = pipe.transform(null);
    expect(transformedDate).toBe('');
  });
});
