import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AspectRatio } from './aspect-ratio';

describe('AspectRatio', () => {
  it('renders AspectRatio component', () => {
    const { container } = render(<AspectRatio>AspectRatio Content</AspectRatio>);
    expect(container).toBeInTheDocument();
  });
});
