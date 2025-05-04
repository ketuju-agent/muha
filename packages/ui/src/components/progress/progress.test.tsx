import React from 'react';
import { render } from '@testing-library/react';
import { Progress } from './progress';

describe('Progress', () => {
  it('renders Progress component', () => {
    const { container } = render(<Progress />);
    expect(container).toBeInTheDocument();
  });
});
