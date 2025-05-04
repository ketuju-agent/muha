import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Footer } from '@packages/ui/components/layouts/footers/footer-ketuju';
import { Navigation } from '@packages/ui/components/layouts/headers/header-ketuju';
import '@packages/ui/globals.css';

import siteConfig from '../../site.config';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: ['Marketing', 'Database', 'Software'],
    authors: [
        {
            name: 'yourname',
            url: ''
        }
    ],
    creator: 'yourname',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.title
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        creator: '@ketujucreative'
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.className} min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-orange-100 selection:text-orange-600`}>
                <Navigation />
                {children}
                <Footer productName='Klolakos' />
            </body>
        </html>
    );
}
