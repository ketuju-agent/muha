import React from 'react';
import { render } from '@testing-library/react';
import { Text } from './text';

describe('Text', () => {
  it('renders Text component', () => {
    const { container } = render(<Text>Text Content</Text>);
    expect(container).toBeInTheDocument();
  });
});
