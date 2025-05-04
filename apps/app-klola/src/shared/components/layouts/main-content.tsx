'use client';

import { LayoutsNavs } from '@ui/components/layouts/navbars/layouts-navs';
import AppSidebar from '@ui/components/layouts/sidebars/app-sidebar/app';
import { MenuItemComponent } from '@ui/components/layouts/sidebars/menu-item';
import DropdownHeaderContent from '@ui/components/layouts/sidebars/nav/dropdown-header-content';
import HeaderSidebar from '@ui/components/layouts/sidebars/nav/header-sidebar';
import NavMainContent from '@ui/components/layouts/sidebars/nav/nav-main';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@ui/components/layouts/sidebars/sidebar';

import { MainLayoutProps } from '@/shared/types/breadcrumbs';
import { menuItems, menusData } from '@/data/menus';
import { MenuItem } from '@/shared/types/menu-Item';
import { Home } from 'lucide-react';

const logoData = {
    logo: Home,
    name: 'My Company',
    plan: 'Semua Module'
};

const userPermissions = new Set([
    'name_module_master_data_position',
    'name_module_hr_payroll',
    'name_module_finance_accounts'
]);

const filterMenuByPermissions = (menu: MenuItem[]): MenuItem[] =>
    menu.reduce<MenuItem[]>((acc, item) => {
        if (!item.permission || userPermissions.has(item.permission)) {
            acc.push({ ...item, children: filterMenuByPermissions(item.children) });
        }

        return acc;
    }, []);

const menuData = filterMenuByPermissions(menusData);

const MainLayout: React.FC<MainLayoutProps> = ({ breadcrumbs, children }) => (
    <SidebarProvider>
        <AppSidebar
            header={
                <NavMainContent>
                    <HeaderSidebar logoSidebars={logoData} isClickable defaultLabel='Default Logo' />
                    <DropdownHeaderContent title='Module'>
                        {menuItems.map(({ name, icon: Icon, onClick }, index) => (
                            <div
                                key={index}
                                onClick={onClick}
                                className='flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100'>
                                <Icon className='mr-2 h-4 w-4' />
                                <span>{name}</span>
                            </div>
                        ))}
                    </DropdownHeaderContent>
                </NavMainContent>
            }
            content={menuData.map((item) => (
                <MenuItemComponent key={item.id} item={item} />
            ))}
        />
        <SidebarInset>
            <LayoutsNavs sidebarTrigger={<SidebarTrigger />} breadcrumbProps={{ items: breadcrumbs }} />
            <main>{children}</main>
        </SidebarInset>
    </SidebarProvider>
);

export default MainLayout;
