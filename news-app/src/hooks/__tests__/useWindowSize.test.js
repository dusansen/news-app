import useWindowSize from '../useWindowSize';
import { renderHook } from '@testing-library/react-hooks'

describe('useWindowSize hook', () => {
  it('should return window width and height', () => {
    const width = 1000;
    const height = 900;
    resizeWindow(width, height);

    const { result: { current: windowSize } } = renderHook(() => useWindowSize());

    expect(windowSize).toEqual({ width, height });
  });
});
