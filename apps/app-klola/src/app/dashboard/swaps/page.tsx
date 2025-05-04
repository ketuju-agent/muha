'use client';

// import { Suspense } from 'react';

import MainLayout from '@/shared/components/layouts/main-content';
// import { Overview } from '@/modules/core/home/components/overview';
// import { OverviewLoader } from '@/modules/core/home/components/overview-loader';
// import { RecentSales } from '@/modules/core/home/components/recent-sales';
// import { RecentSalesLoader } from '@/modules/core/home/components/recent-sales-loader';
// import { Stats } from '@/modules/core/home/components/stats';
import { StatsLoader } from '@/modules/core/home/components/stats-loader';
// import SwapLayout from '@/modules/core/home/components/swap-layout';
// import { TransactionsLoader } from '@/modules/core/home/components/transaction-loader';
import { Transactions } from '@/modules/core/home/components/transactions';
// import { ProductTable } from '@/products/klolatoko/modules/products/components/product-table';
import { Card, CardDescription, CardTitle } from '@ui/components/base/card';
import { CardHeader } from '@ui/components/base/card';
import { CardContent } from '@ui/components/base/card';
import { useTranslation } from '@refinedev/core';

import ProtectedLayout from '@/shared/components/layouts/protected-layout';

const router_bearcrums = [
    { label: 'Dashboard', href: '/' },
    { label: 'Second Page', href: '/second-page' },
    { label: 'Third Page', href: '/third-page', isPage: true }
];
export default function Page() {
    const { translate: t } = useTranslation();

    return (
        <ProtectedLayout>
            <MainLayout breadcrumbs={router_bearcrums}>
                <p>{t('categories.fields.title')}</p>
                {/* <SwapLayout
                    defaultEditing={false}
                    sections={initialSwapSections}
                    sectionSlotClassNames={sectionSlotClassNames}
                    className='grid w-full grid-cols-2 grid-rows-5 gap-8'
                /> */}
            </MainLayout>
        </ProtectedLayout>
    );
}

const initialSwapSections = {
    top: (
        <Card className='h-full flex-grow'>
            <CardHeader>
                <CardTitle>Stats</CardTitle>
            </CardHeader>
            <CardContent className='pl-2'>
                {/* <Suspense key={'stats'} fallback={<StatsLoader />}>
                    <Stats />
                </Suspense> */}
            </CardContent>
        </Card>
    ),
    center_left: (
        <Card className='h-full flex-grow'>
            <CardHeader>
                <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className='pl-2'>
                {/* <Suspense key={'overview'} fallback={<OverviewLoader />}>
                    <Overview />
                </Suspense> */}
            </CardContent>
        </Card>
    ),
    center_right: (
        <Card className='h-full flex-grow'>
            <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
                {/* <Suspense key={'recent-sales'} fallback={<RecentSalesLoader />}>
                    <RecentSales />
                </Suspense> */}
            </CardContent>
        </Card>
    ),
    bottom: (
        <Card className='h-full flex-grow'>
            <CardHeader className='flex flex-row items-center'>
                <div className='grid gap-2'>
                    <CardTitle>Transactions</CardTitle>
                    <CardDescription>Recent transactions from your store.</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                {/* <Suspense key={'transactions'} fallback={<TransactionsLoader />}> */}
                    <Transactions />
                {/* </Suspense> */}
            </CardContent>
        </Card>
    )
};

// this is the class names for the sections of the swap layout.
const sectionSlotClassNames = {
    '1': 'col-span-2 row-span-1 h-full w-full flex flex-col',
    '2': 'col-span-1 row-span-2 h-full w-full flex flex-col',
    '3': 'col-span-1 row-span-2 h-full w-full flex flex-col',
    '4': 'col-span-2 row-span-2 h-full w-full flex flex-col'
};
