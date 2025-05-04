import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Footer } from '@packages/ui/components/layouts/footers/footer-ketuju';
import { Navigation } from '@packages/ui/components/layouts/headers/header-ketuju';
import '@packages/ui/globals.css';

import { siteConfig } from './siteConfig';

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
    metadataBase: new URL('https://yoururl.com'),
    title: siteConfig.name,
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
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        creator: '@yourname'
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
                <Footer
                    productName='Klolarental'
                    description='Bikin rental mobilmu nggak ribet lagi! Aplikasi kami hadir buat otomatisasi manajemen, pantau pemesanan, dan tingkatkan keuntunganmu. Yuk, coba sekarang!'
                />
            </body>
        </html>
    );
}
