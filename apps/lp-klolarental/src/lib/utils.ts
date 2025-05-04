import { ReadonlyURLSearchParams } from 'next/navigation';

import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const slugify = (str: string): string =>
    str
        .trim() // Trim leading/trailing whitespace
        .toLowerCase()
        .replace(/[^a-z0-9\s-]+/g, '') // Remove non-alphanumeric characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with a single one

export const constructUrlWithParams = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams): string => {
    const queryString = params.toString();
    return queryString ? `${pathname}?${queryString}` : pathname;
};

export function absoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const convertImageUrlToDataUrl = async (imageUrl: string): Promise<string | null> => {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);

        const arrayBuffer = await response.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString('base64');
        const contentType = response.headers.get('content-type') ?? 'application/octet-stream';

        return `data:${contentType};base64,${base64}`;
    } catch (error) {
        console.error('Error converting image URL to data URL:', error);
        return null;
    }
};

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
    if (isNaN(amount)) return '';
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: currency.toUpperCase(),
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
};

// Tremor Raw focusInput [v0.0.1]

export const focusInput = [
    // base
    'focus:ring-2',
    // ring color
    'focus:ring-blue-200 dark:focus:ring-blue-700/30',
    // border color
    'focus:border-blue-500 dark:focus:border-blue-700'
];

// Tremor Raw focusRing [v0.0.1]

export const focusRing = [
    // base
    'outline outline-offset-2 outline-0 focus-visible:outline-2',
    // outline color
    'outline-blue-500 dark:outline-blue-500'
];

// Tremor Raw hasErrorInput [v0.0.1]

export const hasErrorInput = [
    // base
    'ring-2',
    // border color
    'border-red-500 dark:border-red-700',
    // ring color
    'ring-red-200 dark:ring-red-700/30'
];
