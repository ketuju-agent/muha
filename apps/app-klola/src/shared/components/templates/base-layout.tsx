import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Head from 'next/head';

import { ThemeProvider } from 'next-themes';

import { appConfig } from '@/shared/config/app';
import ReactQueryProvider from '@/shared/providers/react-query-provider';
import { Toaster } from '@ui/components/base/toaster';
import '@ui/globals.css';


export const metadata: Metadata = {
    title: appConfig.appName,
    description: appConfig.description
};

const GuestLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <body className={`bg-background text-foreground antialiased`}>
                <ThemeProvider attribute='class'>
                    <ReactQueryProvider>{children}</ReactQueryProvider>
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
};

export default GuestLayout;
