import { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import ReactQueryProvider from '@/shared/providers/react-query-provider';
import AuthProvider from '@/shared/providers/session-provider';
import { Toaster } from '@ui/components/base/toaster';
import '@ui/globals.css';

import { RefineContext } from './_refine_context';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import React from 'react';

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
    title: 'ERP',
    description: 'One Stop Solution to your bussiness!'
};

const Layout = async ({ children }: Readonly<{ children: ReactNode }>) => {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html suppressHydrationWarning lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}>
                  <ThemeProvider attribute='data-theme' defaultTheme='zycas'>
                      <ReactQueryProvider>
                          <NextIntlClientProvider locale={locale} messages={messages}>
                              <RefineContext>
                                  <AuthProvider>
                                      {children}
                                  </AuthProvider>
                              </RefineContext>
                          </NextIntlClientProvider>
                      </ReactQueryProvider>
                  </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
};

export default Layout;
