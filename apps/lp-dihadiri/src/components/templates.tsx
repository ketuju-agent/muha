'use client';

import { useEffect, useState } from 'react';

import { ArrowRight, ChevronDown } from 'lucide-react';

type Template = {
    id: number;
    src: string;
    alt: string;
};

type CategoryTemplates = {
    [key: string]: Template[];
};

const templatesByCategory: CategoryTemplates = {
    Pernikahan: [
        { id: 1, src: '/placeholder.svg?height=400&width=400', alt: 'T-Shirt Template 1' },
        { id: 2, src: '/placeholder.svg?height=400&width=400', alt: 'T-Shirt Template 2' },
        { id: 3, src: '/placeholder.svg?height=400&width=400', alt: 'T-Shirt Template 3' },
        { id: 4, src: '/placeholder.svg?height=400&width=400', alt: 'T-Shirt Template 4' },
        { id: 5, src: '/placeholder.svg?height=400&width=400', alt: 'T-Shirt Template 5' }
    ],
    Aqiqah: [
        { id: 6, src: '/placeholder.svg?height=400&width=400', alt: 'Hoodie Template 1' },
        { id: 7, src: '/placeholder.svg?height=400&width=400', alt: 'Hoodie Template 2' },
        { id: 8, src: '/placeholder.svg?height=400&width=400', alt: 'Hoodie Template 3' }
    ],
    'Ulang Tahun': [
        { id: 9, src: '/placeholder.svg?height=400&width=400', alt: 'Bag Template 1' },
        { id: 10, src: '/placeholder.svg?height=400&width=400', alt: 'Bag Template 2' },
        { id: 11, src: '/placeholder.svg?height=400&width=400', alt: 'Bag Template 3' }
    ],
    'Acara Kantor': [
        { id: 12, src: '/placeholder.svg?height=400&width=400', alt: 'Poster Template 1' },
        { id: 13, src: '/placeholder.svg?height=400&width=400', alt: 'Poster Template 2' },
        { id: 14, src: '/placeholder.svg?height=400&width=400', alt: 'Poster Template 3' }
    ],
    Kelulusan: [
        { id: 15, src: '/placeholder.svg?height=400&width=400', alt: 'Social Media Template 1' },
        { id: 16, src: '/placeholder.svg?height=400&width=400', alt: 'Social Media Template 2' },
        { id: 17, src: '/placeholder.svg?height=400&width=400', alt: 'Social Media Template 3' }
    ],
    Stickers: [
        { id: 18, src: '/placeholder.svg?height=400&width=400', alt: 'Sticker Template 1' },
        { id: 19, src: '/placeholder.svg?height=400&width=400', alt: 'Sticker Template 2' },
        { id: 20, src: '/placeholder.svg?height=400&width=400', alt: 'Sticker Template 3' }
    ]
};

export function Templates() {
    const [selectedCategory, setSelectedCategory] = useState('Pernikahan');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const categories = Object.keys(templatesByCategory);
    console.log('test');
    useEffect(() => {
        console.log('test');
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
    };

    return (
        <section className='px-4 py-20'>
            <div className='mx-auto max-w-[1200px]'>
                <h2 className='text-[40px] leading-tight font-bold tracking-tight text-black'>
                    Professional-Grade Templates.
                    <br />
                    Template Pilihan
                </h2>
                <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-4'>
                    <div className='space-y-4'>
                        {isMobile ? (
                            <div className='relative'>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className='flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-2 text-left text-[15px] font-medium shadow-sm'>
                                    <span>{selectedCategory}</span>
                                    <ChevronDown
                                        className={`h-4 w-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {isDropdownOpen && (
                                    <div className='absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white py-1 shadow-lg'>
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => handleCategoryChange(category)}
                                                className={`block w-full px-4 py-2 text-left text-[15px] ${
                                                    selectedCategory === category
                                                        ? 'bg-gray-50 font-medium text-black'
                                                        : 'text-[#6B7280] hover:bg-gray-50'
                                                }`}>
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`block text-left text-[15px] transition-colors ${
                                            selectedCategory === category
                                                ? 'font-medium text-black'
                                                : 'text-[#6B7280] hover:text-black'
                                        }`}>
                                        {category}
                                    </button>
                                ))}
                            </>
                        )}
                        <a href='#' className='mt-6 inline-flex items-center gap-2 text-sm font-medium text-black'>
                            See all templates
                            <ArrowRight className='h-4 w-4' />
                        </a>
                    </div>
                    <div className='col-span-3 grid grid-cols-2 gap-4 md:grid-cols-3'>
                        {templatesByCategory[selectedCategory].map((template) => (
                            <div
                                key={template.id}
                                className='group relative aspect-square overflow-hidden rounded-lg bg-[#F9FAFB]'>
                                <img
                                    src={template.src}
                                    alt={template.alt}
                                    className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                                    loading='lazy'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
