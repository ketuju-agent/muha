'use client';

import { useRef } from 'react';

import './style.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LogoIntro() {
    const scene = useRef(null);

    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start start', 'end end']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], ['300px', '5000px']);

    return (
        <>
            <div style={{ height: '2vh' }}></div>
            <div className='main w-full' ref={scene}>
                <motion.div className='mask' style={{ maskSize: imageScale }}>
                    <img src='https://image.mux.com/tgcgNxURMDq02gJ02thoMZ3cLPsNHzN4Ak/animated.gif?start=20' />
                </motion.div>
            </div>
        </>
    );
}
