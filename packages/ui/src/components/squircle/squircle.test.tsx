import React from 'react';
import { render } from '@testing-library/react';
import { SquircleIconContainer } from './squircle';

describe('Squircle', () => {
  it('renders Squircle component', () => {
    const { container } = render(<SquircleIconContainer>Content</SquircleIconContainer>);
    expect(container).toBeInTheDocument();
  });
});
