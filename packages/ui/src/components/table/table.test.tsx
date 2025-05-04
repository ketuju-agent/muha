import React from 'react';
import { render } from '@testing-library/react';
import { Table, TableBody, TableRow, TableCell } from './table';

describe('Table', () => {
  it('renders Table component', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Table Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(container).toBeInTheDocument();
  });
});
