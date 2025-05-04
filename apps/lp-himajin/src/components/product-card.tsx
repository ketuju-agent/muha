import Image from 'next/image';

import { Badge } from '@packages/ui/components/base/badge';
import { Button } from '@packages/ui/components/base/button';
import { Card, CardContent } from '@packages/ui/components/base/card';

import { Plus } from 'lucide-react';

interface ProductCardProps {
    name: string;
    price: number;
    unit: string;
    image: string;
    discount?: number;
}

export function ProductCard({ name, price, unit, image, discount }: ProductCardProps) {
    return (
        <Card className='overflow-hidden border-none shadow-sm'>
            <CardContent className='p-2'>
                <div className='relative mb-2'>
                    <Image
                        src={image}
                        alt={name}
                        width={160}
                        height={160}
                        className='aspect-square w-full rounded-lg object-cover'
                    />
                    {discount && (
                        <Badge className='absolute top-1 left-1 bg-red-500 px-1 py-0.5 text-xs text-white'>
                            -{discount}%
                        </Badge>
                    )}
                </div>
                <h3 className='mb-0.5 line-clamp-2 text-sm font-medium'>{name}</h3>
                <div className='mb-1 text-xs text-gray-500'>{unit}</div>
                <div className='flex items-center justify-between'>
                    <div className='text-sm font-bold'>Rp {price.toLocaleString()}</div>
                    <Button size='sm' className='h-6 w-6 rounded-full bg-green-500 p-0 text-white hover:bg-green-600'>
                        <Plus className='h-4 w-4' />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
