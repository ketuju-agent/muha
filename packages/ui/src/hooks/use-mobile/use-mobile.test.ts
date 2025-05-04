import { renderHook, act } from '@testing-library/react';
import { useIsMobile } from './use-mobile';
import { vi } from 'vitest';

describe('useIsMobile', () => {
  it('should return a boolean indicating mobile state', () => {
    window.innerWidth = 500;
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    }));
    const { result } = renderHook(() => useIsMobile());
    expect(typeof result.current).toBe('boolean');
  });
});
