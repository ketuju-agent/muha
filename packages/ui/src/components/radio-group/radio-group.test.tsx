import React from 'react';
import { render } from '@testing-library/react';
import { RadioGroup } from './radio-group';

describe('RadioGroup', () => {
  it('renders RadioGroup component', () => {
    const { container } = render(<RadioGroup />);
    expect(container).toBeInTheDocument();
  });
});
