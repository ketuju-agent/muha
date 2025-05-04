'use client';

import { ScrollArea, ScrollBar } from '@ui/components/base/scroll-area';

export default function Page() {
    return (
        <ScrollArea className='flex h-[calc(100vh-5rem)] flex-col gap-4 p-2 pt-0 sm:h-[calc(100vh-5rem)] sm:p-4'>
            <div className='p-2 sm:py-4'>
                <p>dfgdsfghjkhgf dfgfdsdfgfds </p>
            </div>
            <ScrollBar orientation='horizontal' />
        </ScrollArea>
    );
}
