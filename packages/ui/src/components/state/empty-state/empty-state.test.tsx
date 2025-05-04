import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateAction } from './empty-state';

describe('EmptyState', () => {
  it('renders all variants correctly', () => {
    const variants = [
      'unauthorized', 'incomplete', 'notFound', 'systemProblem', 'badGateway', 'underMaintenance', 'gatewayTimeout', 'incorrectAccess', 'custom'
    ];
    variants.forEach(variant => {
      render(
        <EmptyState>
          <EmptyStateIcon variant={variant as any} customIcon={<span>⭐</span>} />
          <EmptyStateTitle variant={variant as any} customTitle="Custom Title" />
          <EmptyStateDescription variant={variant as any} customDescription="Custom Description" />
          <EmptyStateAction variant={variant as any} customActionText="Custom Action" />
        </EmptyState>
      );
      // Check icon, title, description, action are rendered
      expect(screen.getByText(/custom/i) || screen.getByText(/akses|lengkap|tidak ditemukan|sistem|koneksi|perbaikan|merespons|akses/i)).toBeDefined();
    });
  });

  it('calls onClick when action is clicked', () => {
    const handleClick = vi.fn();
    render(
      <EmptyState>
        <EmptyStateAction variant="custom" customActionText="Click Me" onClick={handleClick} />
      </EmptyState>
    );
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalled();
  });
});
