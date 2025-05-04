import * as React from 'react';

import Link from 'next/link';

import { useNavMenu } from '@/shared/hooks/query/user-menu';
import { cn } from '@ui/lib/utils';
import type { IMenu } from '@/shared/schema/menu';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@ui/components/base/breadcrumb';

interface Breadcrumb {
    title: string;
    to: string;
    isLast: boolean;
}

export function NavBreadcrumb({ className }: { className?: string }) {
    const { data: menus } = useNavMenu();
    const findMenuPath = (
        pathname: string,
        items: IMenu[],
        parents: IMenu[] = []
    ): (IMenu & { parents: IMenu[] }) | null => {
        for (const item of items) {
            if (item.to === pathname) {
                return { ...item, parents };
            }

            if (item.children?.length) {
                const found = findMenuPath(pathname, item.children, [...parents, item]);
                if (found) return found;
            }
        }
        return null;
    };

    const buildBreadcrumbs = (): Breadcrumb[] => {
        const menuPath = findMenuPath(location.pathname, menus);
        if (!menuPath) return [];

        const breadcrumbs: Breadcrumb[] = [];

        menuPath.parents.forEach((parent) => {
            breadcrumbs.push({
                title: String(parent.title),
                to: parent.to,
                isLast: false
            });
        });

        // 添加当前菜单
        breadcrumbs.push({
            title: String(menuPath.title),
            to: menuPath.to,
            isLast: true
        });

        return breadcrumbs;
    };

    const breadcrumbs = buildBreadcrumbs();

    if (breadcrumbs.length === 0) {
        return null;
    }

    return (
        <Breadcrumb className={cn(className)}>
            <BreadcrumbList className='flex-nowrap'>
                {breadcrumbs.map((item) => (
                    <React.Fragment key={item.to}>
                        <BreadcrumbItem>
                            {!item.isLast ? (
                                <BreadcrumbLink asChild>
                                    <Link href={item.to}>{item.title}</Link>
                                </BreadcrumbLink>
                            ) : (
                                <BreadcrumbPage>{item.title}</BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                        {!item.isLast && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
