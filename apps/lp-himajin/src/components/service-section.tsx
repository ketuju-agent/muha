import Image from 'next/image';

import { Button } from '@packages/ui/components/base/button';
import { Card, CardContent } from '@packages/ui/components/base/card';

interface ServiceSectionProps {
    title: string;
    description: string;
    services: string[];
    imageSrc: string;
}

export function ServiceSection({ title, description, services, imageSrc }: ServiceSectionProps) {
    return (
        <Card className='mb-6'>
            <CardContent className='p-4'>
                <Image src={imageSrc} alt={title} width={400} height={200} className='mb-4 w-full rounded-lg' />
                <h2 className='mb-2 text-xl font-bold'>{title}</h2>
                <p className='mb-4 text-sm text-gray-600'>{description}</p>
                <ul className='space-y-2'>
                    {services.map((service, index) => (
                        <li key={index} className='flex items-start'>
                            <svg
                                className='mt-0.5 mr-2 h-5 w-5 text-green-500'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                            </svg>
                            <span className='text-sm'>{service}</span>
                        </li>
                    ))}
                </ul>
                <Button className='mt-4 w-full bg-green-500 text-white hover:bg-green-600'>
                    Pelajari Lebih Lanjut
                </Button>
            </CardContent>
        </Card>
    );
}
