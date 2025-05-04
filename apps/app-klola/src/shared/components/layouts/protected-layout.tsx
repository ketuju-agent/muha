import { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import { useSession } from 'next-auth/react';

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
    const { data: session, status } = useSession();
    if (status !== 'loading' && !session) {
        redirect('/auth');
    }

    return <>{children}</>;
};

export default ProtectedLayout;
