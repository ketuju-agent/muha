'use client';
import MainLayout from '@/shared/components/layouts/main-content';
import { TabNavigation, TabNavigationLink } from '@ui/components/base/tab-navigation'
import { useTranslation } from '@refinedev/core';
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from '../../../site.config';
import { MetricsCards } from '@/products/klolatoko/modules/stats/components/metrics-card';

import ProtectedLayout from '@/shared/components/layouts/protected-layout';
import { Editor } from '@ui/components/base/editor/editor';

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

  export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    const { translate: t } = useTranslation();
    const pathname = usePathname()

    console.log(pathname)

    return (
        <ProtectedLayout>
            <MainLayout breadcrumbs={router_bearcrums}>
                <Editor />
            </MainLayout>
        </ProtectedLayout>
    );
}
