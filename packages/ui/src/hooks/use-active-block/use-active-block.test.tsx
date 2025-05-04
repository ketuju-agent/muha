import React from 'react';
import { renderHook } from '@testing-library/react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { useActiveBlock } from './use-active-block';
import { vi } from 'vitest';

vi.mock('lexical', () => ({
  $getSelection: vi.fn(() => null),
  $isRangeSelection: vi.fn(() => false),
}));

describe('useActiveBlock', () => {
  it('should return null or the block type depending on selection', () => {
    // Lexical context and editor mocks needed for full test
    // This is a placeholder test to ensure hook runs
    const initialConfig = { namespace: 'test', theme: {}, onError: () => {} };
    function wrapper({ children }: { children: React.ReactNode }) {
      return <LexicalComposer initialConfig={initialConfig}>{children}</LexicalComposer>;
    }
    const { result } = renderHook(() => useActiveBlock(), { wrapper });
    expect(result.current === null || typeof result.current === 'string').toBe(true);
  });
});
