import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import { siteMetadata } from '@/data/site-metadata';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Footer } from '@packages/ui/components/layouts/footers/footer-ketuju';
import { Navigation } from '@packages/ui/components/layouts/headers/header-ketuju';
import '@packages/ui/globals.css';

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
    title: siteMetadata.title,
    description: siteMetadata.description
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}>
                <GoogleAnalytics gaId={'G-F0WBE47V4M'} />
                <Navigation />
                <ThemeProvider attribute='class' defaultTheme='light'>{children}</ThemeProvider>
                <Footer productName='Dihadiri' />
            </body>
        </html>
    );
};

export default Layout;
