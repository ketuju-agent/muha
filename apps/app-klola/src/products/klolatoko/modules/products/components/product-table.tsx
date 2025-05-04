'use client';

import { useMemo, useState } from 'react';

import { DataTable } from '@ui/components/base/data-table/data-table';
import { DataTableToolbar } from '@ui/components/base/data-table/data-table-toolbar';
import { DataTableFilterField } from '@ui/types/data-tables';
import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { schemas } from "@generated/zodios-client";
import { useProducts } from '../queries';
import { TasksTableToolbarActions } from './tasks-table-toolbar-actions';
import { z } from 'zod';

type ProductType = z.infer<typeof schemas.Product>;

export const ProductTable = () => {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10
    });

    const columns: ColumnDef<ProductType>[] = useMemo(
        () => [
            {
                header: 'Name',
                accessorKey: 'name'
            },
            {
                header: 'category',
                accessorKey: 'category'
            },
            {
                header: 'price',
                accessorKey: 'price'
            },
            {
                header: 'stock',
                accessorKey: 'stock'
            },
            {
                header: 'createdAt',
                accessorKey: 'createdAt',
                cell: ({ row }) => {
                    const date = new Date(row.original.createdAt);

                    return (
                        <>
                            {new Intl.DateTimeFormat('id-ID', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            }).format(date)}
                        </>
                    );
                }
            }
        ],
        []
    );

    const { data, isLoading, isError, error } = useProducts();

    console.log('data >>', data);
    const products = useMemo(() => data?.data ?? [], [data]);
    const paginationData = useMemo(() => data?.pagination ?? {}, [data]);

    const filterFields: DataTableFilterField<ProductType>[] = [
        {
            id: 'name',
            label: 'Name',
            placeholder: 'name',
            options: []
        },
        {
            id: 'category',
            label: 'Category',
            placeholder: 'category',
            options: []
        },
        {
            id: 'price',
            label: 'price',
            placeholder: 'price',
            options: []
        },
        {
            id: 'createdAt',
            label: 'createdAt',
            placeholder: 'createdAt',
            options: []
        }
    ];

    const table = useReactTable({
        data: products,
        columns,
        onPaginationChange: setPagination,
        state: { pagination },
        manualPagination: true,
        autoResetPageIndex: false,
        debugTable: true,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <DataTable table={table}>
            <DataTableToolbar table={table} filterFields={filterFields}>
                <TasksTableToolbarActions table={table} />
            </DataTableToolbar>
        </DataTable>
    );
};
