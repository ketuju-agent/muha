import React from 'react';
import { render } from '@testing-library/react';
import { Tooltip, TooltipProvider } from './tooltip';

describe('Tooltip', () => {
  it('renders Tooltip component', () => {
    const { container } = render(
      <TooltipProvider>
        <Tooltip>Tooltip Content</Tooltip>
      </TooltipProvider>
    );
    expect(container).toBeInTheDocument();
  });
});
