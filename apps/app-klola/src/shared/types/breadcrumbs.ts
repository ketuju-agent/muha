interface Breadcrumb {
    label: string;
    href: string;
    isPage?: boolean;
}

export interface MainLayoutProps {
    breadcrumbs: Breadcrumb[];
    children: React.ReactNode;
}
