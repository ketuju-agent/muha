import React from 'react';
import { render } from '@testing-library/react';
import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders Textarea component', () => {
    const { container } = render(<Textarea />);
    expect(container).toBeInTheDocument();
  });
});
