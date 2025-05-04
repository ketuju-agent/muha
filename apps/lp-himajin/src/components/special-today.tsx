import Image from 'next/image';

import { Button } from '@packages/ui/components/base/button';
import { Card, CardContent } from '@packages/ui/components/base/card';

import { Plus } from 'lucide-react';

interface SpecialProductProps {
    name: string;
    price: number;
    originalPrice: number;
    image: string;
    weight: string;
    minPurchase: string;
}

function SpecialProduct({ name, price, originalPrice, image, weight, minPurchase }: SpecialProductProps) {
    const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

    return (
        <Card className='relative min-w-[160px] border-none shadow-sm'>
            <Button
                size='sm'
                className='absolute top-2 right-2 z-10 h-6 w-6 rounded-full bg-white p-0 text-green-600 hover:bg-gray-100'>
                <Plus className='h-4 w-4' />
            </Button>
            <CardContent className='p-2'>
                <div className='relative mb-2'>
                    <Image
                        src={image}
                        alt={name}
                        width={140}
                        height={140}
                        className='aspect-square w-full rounded-lg object-cover'
                    />
                    <div className='absolute right-0 bottom-0 left-0 bg-orange-500 px-2 py-0.5 text-xs text-white'>
                        HARGA WOW
                    </div>
                </div>
                <div className='space-y-1'>
                    <div className='text-sm font-bold'>Rp{price.toLocaleString()}</div>
                    <div className='flex items-center gap-1'>
                        <span className='text-xs text-gray-400 line-through'>Rp{originalPrice.toLocaleString()}</span>
                        <span className='text-xs text-red-500'>{discount}%</span>
                    </div>
                    <h3 className='line-clamp-2 text-xs'>{name}</h3>
                    <div className='text-xs text-gray-500'>{weight}</div>
                    <div className='text-xs text-gray-500'>Min Belanja {minPurchase}</div>
                </div>
            </CardContent>
        </Card>
    );
}

export function SpecialToday() {
    const specialProducts = [
        {
            name: 'Alpukat Mentega Ready to Eat (Siap Makan)',
            price: 2025,
            originalPrice: 2500,
            image: '/placeholder.svg',
            weight: '1 pcs Ekonomis ~1.3 Liter',
            minPurchase: '10rb produk ini'
        },
        {
            name: 'Telur Ayam Negeri Sayurbox',
            price: 0,
            originalPrice: 28000,
            image: '/placeholder.svg',
            weight: '10 pcs, 15 pcs +2 Lainnya',
            minPurchase: '119rb produk ini'
        },
        {
            name: 'Alpukat Mentega',
            price: 12900,
            originalPrice: 15000,
            image: '/placeholder.svg',
            weight: '1 pcs (250 g)',
            minPurchase: '10rb produk ini'
        }
    ];

    return (
        <div className='relative'>
            <div className='absolute top-0 bottom-0 left-0 w-[120px] overflow-hidden rounded-lg bg-green-50'>
                <div className='relative h-full'>
                    <Image src='/placeholder.svg' alt='Special Hari Ini' fill className='object-cover' />
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <Image src='/placeholder.svg' alt='Special Logo' width={100} height={50} className='w-20' />
                    </div>
                </div>
            </div>
            <div className='overflow-x-auto pl-[110px]'>
                <div className='flex gap-2 pb-2'>
                    {specialProducts.map((product, index) => (
                        <SpecialProduct key={index} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
