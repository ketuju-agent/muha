'use client';

import { LayoutsNavs } from '@ui/components/layouts/navbars/layouts-navs';
import { AppSidebar } from '@ui/components/layouts/sidebars/app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@ui/components/layouts/sidebars/sidebar';

import { MainLayoutProps } from '@/shared/types/breadcrumbs';
import { DollarSign, GalleryVerticalEnd, Settings2, SquareTerminal, Truck, Users } from 'lucide-react';

const sidebarData = {
    user: {
        name: 'shadcn',
        email: 'shadcn@example.com',
        avatar: '/avatars/shadcn.jpg'
    },
    teams: [
        {
            name: 'PT Red Ant Colony',
            logo: GalleryVerticalEnd,
            plan: 'Enterprise',
            switcher: true,
            modules: [
                { name: 'Keuangan & Akuntansi', icon: DollarSign, onClick: () => console.log('Keuangan & Akuntansi') },
                { name: 'Human Resources', icon: Users, onClick: () => console.log('Human Resources') },
                { name: 'Supply Chain Management', icon: Truck, onClick: () => console.log('Supply Chain Management') }
            ]
        }
    ],
    navMain: [
        {
            title: 'Dashboards',
            url: '/dashboard',
            icon: SquareTerminal,
            isActive: true,
            items: [{ title: 'Laba Rugi', url: '/dashboard/laba-rugi' }]
        },
        {
            title: 'Settings',
            url: '/settings',
            icon: Settings2,
            items: [{ title: 'Profile', url: '/settings/profile' }]
        }
    ]
};

const Sidebar: React.FC<MainLayoutProps> = ({ breadcrumbs, children }) => {
    return (
        <SidebarProvider>
            <AppSidebar {...sidebarData} />
            <SidebarInset>
                <LayoutsNavs sidebarTrigger={<SidebarTrigger />} breadcrumbProps={{ items: breadcrumbs }} />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
};

export default Sidebar;
