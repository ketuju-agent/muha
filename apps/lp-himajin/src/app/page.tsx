import { CategoryIcon } from '@/components/category-icon';
import { Header } from '@/components/header';
import { ProductCard } from '@/components/product-card';
import { SpecialToday } from '@/components/special-today';
import ProductFeatures from '@/modules/product/components/product-features';
import { Button } from '@packages/ui/components/base/button';

export default function Home() {
    const categories = [
        { name: 'Sayur', icon: '/placeholder.svg', href: '#sayur' },
        { name: 'Buah', icon: '/placeholder.svg', href: '#buah' },
        { name: 'Daging', icon: '/placeholder.svg', href: '#daging' },
        { name: 'Ikan', icon: '/placeholder.svg', href: '#ikan' },
        { name: 'Telur', icon: '/placeholder.svg', href: '#telur' },
        { name: 'Bumbu', icon: '/placeholder.svg', href: '#bumbu' }
    ];

    const products = [
        { name: 'Bawang Merah', price: 35000, unit: '500 gr', image: '/placeholder.svg' },
        { name: 'Jeruk Mandarin', price: 29900, unit: '500 gr', image: '/placeholder.svg' },
        { name: 'Tomat Cherry', price: 15000, unit: '250 gr', image: '/placeholder.svg', discount: 20 },
        { name: 'Wortel', price: 8900, unit: '500 gr', image: '/placeholder.svg' }
    ];

    return (
        <div className='min-h-screen bg-gray-50'>
            <Header />
            <main className='mx-auto mt-24 max-w-[480px] space-y-4 px-4 py-4'>
                {/* Banner Promo */}
                <ProductFeatures />

                {/* Special Hari Ini */}
                <SpecialToday />

                {/* Kategori */}
                <div>
                    <h2 className='mb-2 text-base font-semibold'>Kategori</h2>
                    <div className='grid grid-cols-4 gap-2'>
                        {categories.map((category, index) => (
                            <CategoryIcon key={index} {...category} />
                        ))}
                    </div>
                </div>

                {/* Flash Sale */}
                <div>
                    <div className='mb-2 flex items-center justify-between'>
                        <h2 className='text-base font-semibold'>Flash Sale</h2>
                        <Button variant='link' className='p-0 text-xs text-green-600'>
                            Lihat Semua
                        </Button>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>

                {/* Produk Terlaris */}
                <div>
                    <div className='mb-2 flex items-center justify-between'>
                        <h2 className='text-base font-semibold'>Produk Terlaris</h2>
                        <Button variant='link' className='p-0 text-xs text-green-600'>
                            Lihat Semua
                        </Button>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
