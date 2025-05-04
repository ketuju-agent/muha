import { Product } from '@/data/mock-api-product';
import { Table } from '@tanstack/react-table';

export type { Table } from '@tanstack/react-table';

export { schemas } from "@generated/zodios-client";

export type DataTableFilterField<T> = {
  id: keyof T;
  label: string;
  field: keyof T;
  type: string;
};

export interface TasksTableToolbarActionsProps {
  table: Table<Product>;
}


