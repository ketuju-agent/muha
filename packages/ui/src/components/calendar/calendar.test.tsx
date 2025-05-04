import React from 'react';
import { render } from '@testing-library/react';
import { Calendar } from './calendar';

describe('Calendar', () => {
  it('renders Calendar component', () => {
    const { container } = render(<Calendar />);
    expect(container).toBeInTheDocument();
  });
});
