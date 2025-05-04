import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ErrorState } from './error-state';

describe('ErrorState', () => {
  it('renders error message', () => {
    render(<ErrorState error={new Error('Test error')} />);
    expect(screen.getByText(/something went wrong/i)).toBeDefined();
    expect(screen.getByText(/go back to home/i)).toBeDefined();
    expect(screen.getByText(/oh oh/i)).toBeDefined();
  });
});
