import Image from 'next/image';

import { BackHeader } from '@/components/back-header';
import { SellerProducts } from '@/components/seller-products';
import { Button } from '@packages/ui/components/base/button';
import { Separator } from '@packages/ui/components/base/separator';

export default function ProductDetail() {
    // Sample data - in a real app this would come from an API
    const product = {
        name: 'Alpukat Mentega Ready to Eat',
        price: 25000,
        description:
            'Alpukat mentega siap makan, fresh dari kebun. Dipetik langsung saat matang sempurna untuk menjaga kualitas dan rasa terbaik. Alpukat ini memiliki daging buah yang lembut dan creamy, cocok untuk dijadikan guacamole, ditambahkan ke dalam salad, atau dimakan langsung. Kaya akan nutrisi seperti lemak sehat, serat, vitamin K, folat, vitamin C, potassium, dan vitamin B6. Penyimpanan yang tepat dapat memperpanjang kesegaran buah hingga 3-5 hari pada suhu ruang atau 7-10 hari dalam lemari es.',
        condition: 'Fresh',
        weight: '500gr',
        seller: {
            name: 'Fresh Market',
            image: '/placeholder.svg',
            rating: 4.8,
            products: [
                {
                    id: '1',
                    name: 'Jeruk Mandarin',
                    price: 35000,
                    image: '/placeholder.svg'
                },
                {
                    id: '2',
                    name: 'Apel Fuji',
                    price: 45000,
                    image: '/placeholder.svg'
                },
                {
                    id: '3',
                    name: 'Pisang Cavendish',
                    price: 28000,
                    image: '/placeholder.svg'
                }
            ]
        }
    };

    return (
        <div className='min-h-screen bg-gray-50 pb-20'>
            <BackHeader />

            {/* Product Image */}
            <div className='relative mt-[52px] aspect-square w-full'>
                <Image src='/placeholder.svg' alt={product.name} fill className='object-cover' />
            </div>

            {/* Product Info */}
            <div className='mx-auto max-w-[480px]'>
                <div className='space-y-4 bg-white p-4'>
                    <div>
                        <h1 className='mb-2 text-xl font-bold'>{product.name}</h1>
                        <div className='text-2xl font-bold text-green-600'>Rp {product.price.toLocaleString()}</div>
                    </div>

                    <Separator />

                    {/* Product Details */}
                    <div className='space-y-2'>
                        <h2 className='font-semibold'>Detail Produk</h2>
                        <div className='grid grid-cols-2 gap-2 text-sm'>
                            <div className='text-gray-600'>Kondisi</div>
                            <div>{product.condition}</div>
                            <div className='text-gray-600'>Berat</div>
                            <div>{product.weight}</div>
                        </div>
                    </div>

                    <Separator />

                    {/* Description */}
                    <div className='space-y-2'>
                        <h2 className='font-semibold'>Deskripsi</h2>
                        <p className='text-sm text-gray-600'>{product.description}</p>
                    </div>

                    <Separator />

                    {/* Seller Info */}
                    <div className='flex items-center gap-3'>
                        <Image
                            src={product.seller.image}
                            alt={product.seller.name}
                            width={48}
                            height={48}
                            className='rounded-full'
                        />
                        <div className='flex-1'>
                            <h3 className='font-semibold'>{product.seller.name}</h3>
                            <div className='text-sm text-gray-600'>Rating {product.seller.rating}</div>
                        </div>
                    </div>
                </div>

                {/* Other Products */}
                <div className='mt-4 bg-white p-4'>
                    <SellerProducts products={product.seller.products} />
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className='fixed right-0 bottom-0 left-0 border-t bg-white'>
                <div className='mx-auto flex max-w-[480px] items-center gap-3 px-4 py-3'>
                    <Button className='flex-1 bg-green-500 text-white hover:bg-green-600'>Beli di Tokopedia</Button>
                    <Button className='flex-1 bg-green-600 text-white hover:bg-green-700'>Beli via WhatsApp</Button>
                </div>
            </div>
        </div>
    );
}
