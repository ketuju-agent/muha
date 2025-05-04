import React from 'react';
import { render } from '@testing-library/react';
import { Switch } from './switch';

describe('Switch', () => {
  it('renders Switch component', () => {
    const { container } = render(<Switch />);
    expect(container).toBeInTheDocument();
  });
});
