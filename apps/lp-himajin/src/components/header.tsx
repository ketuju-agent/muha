import Image from 'next/image';
import Link from 'next/link';

import { Input } from '@packages/ui/components/base/input';

import { Search, ShoppingCart, User } from 'lucide-react';

export function Header() {
    return (
        <header className='fixed top-0 right-0 left-0 z-10 bg-white shadow-sm'>
            <div className='mx-auto max-w-[480px] px-4 py-2'>
                <div className='flex items-center justify-between'>
                    <Link href='/' className='flex items-center space-x-2'>
                        <Image src='/placeholder.svg' alt='Logo' width={32} height={32} />
                        <span className='text-lg font-bold text-green-600'>SayurBox</span>
                    </Link>
                    <div className='flex items-center space-x-4'>
                        <button className='text-gray-600 hover:text-gray-800'>
                            <ShoppingCart className='h-6 w-6' />
                        </button>
                        <button className='text-gray-600 hover:text-gray-800'>
                            <User className='h-6 w-6' />
                        </button>
                    </div>
                </div>
                <div className='mt-2'>
                    <div className='relative'>
                        <Search className='absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400' />
                        <Input
                            className='w-full rounded-full border-gray-300 py-2 pr-4 pl-10'
                            placeholder='Cari sayur, buah, dll'
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
