'use client';
import { Button } from '@packages/ui/components/base/button';
import React from 'react';

type DataTableResetFilterProps = {
  isFilterActive: boolean;
  onReset: () => void;
};

export function DataTableResetFilter({
  isFilterActive,
  onReset
}: DataTableResetFilterProps) {
  return (
    <>
      {isFilterActive ? (
        <Button variant="outline" onClick={onReset}>
          Reset Filters
        </Button>
      ) : null}
    </>
  );
}