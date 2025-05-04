import React from 'react';
import { render } from '@testing-library/react';
import { Heading } from './heading';

describe('Heading', () => {
  it('renders Heading component', () => {
    const { container } = render(<Heading>Heading Content</Heading>);
    expect(container).toBeInTheDocument();
  });
});
