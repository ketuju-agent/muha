import React from 'react';
import { render } from '@testing-library/react';
import { Label } from './label';

describe('Label', () => {
  it('renders Label component', () => {
    const { container } = render(<Label>Label Content</Label>);
    expect(container).toBeInTheDocument();
  });
});
