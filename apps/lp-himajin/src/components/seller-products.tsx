import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@packages/ui/components/base/button';
import { Card } from '@packages/ui/components/base/card';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

interface SellerProductsProps {
    products: Product[];
}

export function SellerProducts({ products }: SellerProductsProps) {
    return (
        <div className='space-y-3'>
            <div className='flex items-center justify-between'>
                <h2 className='text-base font-semibold'>Other Listings by Seller</h2>
                <Button variant='link' className='p-0 text-xs text-green-600'>
                    View All
                </Button>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                {products.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                        <Card className='border-none'>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={120}
                                height={120}
                                className='aspect-square w-full rounded-lg object-cover'
                            />
                            <div className='p-2'>
                                <div className='text-sm font-medium'>Rp {product.price.toLocaleString()}</div>
                                <h3 className='line-clamp-1 text-xs text-gray-600'>{product.name}</h3>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
