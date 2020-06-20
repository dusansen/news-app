import { buildQueryParams } from '../query';

describe('Query utils', () => {
  it('should create query params string from provided object', () => {
    const paramsObject = {
      a: 1,
      b: 'test 1'
    };
    const expected = 'a=1&b=test%201';

    const result = buildQueryParams(paramsObject);
    expect(result).toEqual(expected);
  });
});