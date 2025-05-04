import React from 'react';
import { render } from '@testing-library/react';
import { Sheet } from './sheet';

describe('Sheet', () => {
  it('renders Sheet component', () => {
    const { container } = render(<Sheet>Sheet Content</Sheet>);
    expect(container).toBeInTheDocument();
  });
});
