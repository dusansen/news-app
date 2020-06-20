import { context } from '../context';

describe('Context', () => {
  it('should match context initial state snapshot', () => {
    expect(context).toMatchSnapshot();
  });
});