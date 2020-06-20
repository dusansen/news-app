import { capitalize } from '../text';

describe('Text utils', () => {
  it('should capitalize provided text', () => {
    const text = 'abc';
    const expected = 'Abc';

    const result = capitalize(text);

    expect(result).toEqual(expected);
  });
});