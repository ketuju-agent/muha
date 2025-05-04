import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotFound from './not-found';
describe('NotFound', () => {
  it('renders with default props', () => {
    render(<NotFound />);
    expect(screen.getByText('404')).toBeDefined();
  });
  it('renders with custom title and description', () => {
    render(<NotFound statusCode={403} title="Akses Ditolak" description="Tidak ada akses" />);
    expect(screen.getByText('Akses Ditolak')).toBeDefined();
    expect(screen.getByText('Tidak ada akses')).toBeDefined();
  });
  it('navigates home on button click', () => {
    const push = vi.fn();
    jest.spyOn(require('next/navigation'), 'useRouter').mockReturnValue({ push });
    render(<NotFound />);
    fireEvent.click(screen.getByText(/go back home/i));
    expect(push).toHaveBeenCalledWith('/');
  });
});
