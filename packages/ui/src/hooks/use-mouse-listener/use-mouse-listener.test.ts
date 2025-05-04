import { renderHook } from '@testing-library/react';
import { useMouseListener } from './use-mouse-listener';
import { vi } from 'vitest';

describe('useMouseListener', () => {
  it('should mount and unmount event listeners', () => {
    const callback = vi.fn();
    const { unmount } = renderHook(() => useMouseListener(callback));
    unmount();
    expect(callback).not.toHaveBeenCalled();
  });
});
