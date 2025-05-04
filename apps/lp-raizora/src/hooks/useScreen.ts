import { useEffect } from 'react';

import { screenAtom } from '@/utils/state';

import { useAtom } from 'jotai';

export default function useScreen(listen = false) {
    const [screen, setScreen] = useAtom(screenAtom);

    useEffect(() => {
        if (!listen || typeof window == 'undefined') return;
        update();

        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    function update() {
        setScreen({ width: window.innerWidth, height: window.innerHeight });
    }

    return screen;
}
