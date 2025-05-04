"use client";

import { Button } from "@ui/components/base/button";
import type { Table } from "@tanstack/react-table";

import { Download } from "lucide-react";

type Product = {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    createdAt: string;
};

interface TasksTableToolbarActionsProps {
    table: Table<Product>;
}

export function TasksTableToolbarActions(
    { table }: TasksTableToolbarActionsProps,
) {
    const exportToCSV = () => {
        console.log("Export to CSV");
    };

    return (
        <div className="flex items-center gap-2">
            {/* {table.getFilteredSelectedRowModel().rows.length > 0 && ( */}
            <Button
                variant="outline"
                onClick={exportToCSV}
                className="h-8 gap-2"
            >
                <Download className="size-4" aria-hidden="true" />
                Export
            </Button>
            {/* )} */}
        </div>
    );
}
