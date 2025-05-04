import React from 'react';
import { render } from '@testing-library/react';
import { ContextMenu } from './context-menu';

describe('ContextMenu', () => {
  it('renders ContextMenu component', () => {
    const { container } = render(<ContextMenu>ContextMenu Content</ContextMenu>);
    expect(container).toBeInTheDocument();
  });
});
