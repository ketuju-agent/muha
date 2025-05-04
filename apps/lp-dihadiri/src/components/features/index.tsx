'use client';

import { CarouselIndicator, type Item } from '@packages/ui/components/base/carousel-indicator';

import { ChatInterface } from './chat-interface';
import { Languages, LineChart, MapPin, MessageSquareMore, Plus, Settings, Sparkles } from 'lucide-react';

const features: Item[] = [
    {
        name: 'Omnichannel',
        icon: Plus,
        content: <ChatInterface />
    },
    {
        name: 'Multilingual',
        icon: Languages,
        content: <ChatInterface />
    },
    {
        name: 'Interpolate',
        icon: LineChart,
        content: <ChatInterface />
    },
    {
        name: 'Enriched',
        icon: Sparkles,
        content: <ChatInterface />
    }
];

export function Features() {
    return <CarouselIndicator items={features} />;
}
