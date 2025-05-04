import React from 'react';
import { render } from '@testing-library/react';
import { Drawer } from './drawer';

describe('Drawer', () => {
  it('renders Drawer component', () => {
    const { container } = render(<Drawer>Drawer Content</Drawer>);
    expect(container).toBeInTheDocument();
  });
});
