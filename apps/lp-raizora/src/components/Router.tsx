import { useEffect } from 'react';

import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import Power from '@/components/pages/Power';
import useNotification from '@/hooks/useNotification';
import useRoute from '@/hooks/useRoute';
import useScreen from '@/hooks/useScreen';
import useTheme from '@/hooks/useTheme';
import { useFullscreen, usePage } from '@/utils/state';

import { AnimatePresence } from 'framer-motion';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

export default function Router() {
    useRoute(true);
    useTheme(true);
    useScreen(true);

    const fullscreen = useFullScreenHandle();

    const { loadNotifications } = useNotification();

    const { setFullscreen } = useFullscreen();
    const { page } = usePage();

    useEffect(() => {
        loadNotifications();
    }, []);

    useEffect(() => {
        setFullscreen(fullscreen);
    }, [fullscreen]);

    useEffect(() => {
        document.addEventListener('contextmenu', onContextMenu);
        return () => document.removeEventListener('contextmenu', onContextMenu);
    }, []);

    function onContextMenu(e: MouseEvent) {
        e.preventDefault();
    }

    return (
        <FullScreen handle={fullscreen}>
            <AnimatePresence>{page == 'POWER' && <Power />}</AnimatePresence>
            <AnimatePresence>{page == 'LOGIN' && <Login />}</AnimatePresence>
            {page !== 'POWER' && <Home />}
        </FullScreen>
    );
}
