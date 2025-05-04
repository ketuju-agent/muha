import React from 'react';
import { render } from '@testing-library/react';
import { Toggle } from './toggle';

describe('Toggle', () => {
  it('renders Toggle component', () => {
    const { container } = render(<Toggle>Toggle Content</Toggle>);
    expect(container).toBeInTheDocument();
  });
});
