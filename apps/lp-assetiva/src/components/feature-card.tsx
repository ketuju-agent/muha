'use client';

import { LucideIcon, TypeIcon as type } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    items: string[];
}

export function FeatureCard({ icon: Icon, title, items }: FeatureCardProps) {
    return (
        <div className='rounded-[0.7rem] bg-white p-3 shadow-sm'>
            <div className='flex items-center gap-2'>
                <Icon className='h-5 w-5 text-[#00A884]' />
                <p className='font-medium text-[#111B21]'>{title}</p>
            </div>
            <ul className='mt-2 space-y-1 text-sm text-[#667781]'>
                {items.map((item, index) => (
                    <li key={index}>• {item}</li>
                ))}
            </ul>
        </div>
    );
}
