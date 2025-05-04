'use client';
import MainLayout from '@/shared/components/layouts/main-content';
import { useTranslation } from '@refinedev/core';
import { usePathname } from "next/navigation"
import { siteConfig } from '../../../../site.config';
import ProtectedLayout from '@/shared/components/layouts/protected-layout';
// import ChatMessage from '@/modules/chats';

const router_bearcrums = [
    { label: 'Dashboard', href: '/' },
    { label: 'Second Page', href: '/second-page' },
    { label: 'Third Page', href: '/third-page', isPage: true }
];

const navigation = [
    { name: "Overview", href: siteConfig.baseLinks.quotes.overview },
    { name: "Monitoring", href: siteConfig.baseLinks.quotes.monitoring },
    { name: "Audits", href: siteConfig.baseLinks.quotes.audits },
  ]

export default function Page() {
    const { translate: t } = useTranslation();
    const pathname = usePathname()

    console.log(pathname)

    return (
        <ProtectedLayout>
            <MainLayout breadcrumbs={router_bearcrums}>
              <h4> hello </h4>
                {/* <ChatMessage /> */}
            </MainLayout>
        </ProtectedLayout>
    );
}

