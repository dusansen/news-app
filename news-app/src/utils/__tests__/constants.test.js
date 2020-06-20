import * as constants from '../constants';

describe('Constants utils', () => {
  it('should match snapshot', () => {
    expect(constants).toMatchSnapshot();
  });
});