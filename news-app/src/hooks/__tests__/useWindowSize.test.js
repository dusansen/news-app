import useWindowSize from '../useWindowSize';
import { renderHook, act } from '@testing-library/react-hooks'

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}

describe('useWindowSize hook', () => {
  it('should return window width and height', () => {
    const width = 1000;
    const height = 900;
    resizeWindow(width, height);

    const { result: { current: windowSize } } = renderHook(() => useWindowSize());

    expect(windowSize).toEqual({ width, height });
  });
});
