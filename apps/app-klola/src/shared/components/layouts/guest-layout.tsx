'use client';

import { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import { useSession } from 'next-auth/react';

const GuestLayout = ({ children }: { children: ReactNode }) => {
    const { data: session } = useSession();

    if (session) {
        redirect('/dashboard');
    }

    return <>{children}</>;
};

export default GuestLayout;
