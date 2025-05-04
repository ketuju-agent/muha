'use client';

import React, { useRef } from 'react';

import { Footer as FooterKetuju } from '@packages/ui/components/layouts/footers/footer-ketuju';
import { TextClipPath } from '@packages/ui/components/motions/text-clip-path';

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

interface LogosProps {
    scrollProgress: MotionValue<number>;
}

const Logos: React.FC<LogosProps> = ({ scrollProgress }) => {
    const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
    return (
        <div className='h-[350px] overflow-hidden'>
            <FooterKetuju />
        </div>
    );
};
export default function Footer() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    });

    return <TextClipPath stickyFooter={<Logos scrollProgress={scrollYProgress} />} />;
}
