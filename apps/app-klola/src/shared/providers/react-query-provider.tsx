'use client';

import { queryClient } from '@/shared/api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
