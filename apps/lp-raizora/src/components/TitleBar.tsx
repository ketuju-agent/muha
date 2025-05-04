import { useEffect, useRef, useState } from 'react';

import useMobile from '@/hooks/useMobile';
import useTheme from '@/hooks/useTheme';
import Layer from '@/utils/layer';
import { useFullscreen, useInbox, usePage, useTitleBar } from '@/utils/state';
import { useWindows } from '@/utils/state';
import {
    ArrowLeftEndOnRectangleIcon,
    ArrowsPointingInIcon,
    ArrowsPointingOutIcon,
    BellIcon,
    MoonIcon,
    PowerIcon,
    SunIcon
} from '@heroicons/react/24/outline';

import Clock from './Clock';

export default function TitleBar() {
    const barRef = useRef<HTMLDivElement>(null);
    const mobile = useMobile();

    const { setPage } = usePage();
    const { windows } = useWindows();
    const { inbox, setInbox } = useInbox();
    const { fullscreen } = useFullscreen();
    const { setTitleBar } = useTitleBar();

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (!barRef.current) return setTitleBar(0);
        const rect = barRef.current.getBoundingClientRect();
        setTitleBar(rect.height);
    }, [barRef]);

    function toggleFullscreen() {
        if (!fullscreen) return;
        if (fullscreen.active) fullscreen.exit();
        else fullscreen.enter();
    }

    return (
        <div ref={barRef} style={Layer.style('titlebar')} className={`bg-wallpaper fixed inset-x-0 top-0`}>
            <div
                className={`flex w-full justify-between px-4 py-2 ${
                    !mobile ? 'bg-background shadow-text/10 shadow' : windows.length ? 'bg-background' : ''
                } ${loaded ? 'transition-all' : ''}`}>
                {!mobile && (
                    <div className='flex space-x-3'>
                        <button onClick={toggleFullscreen} className='text-text/70 hover:text-text'>
                            {fullscreen?.active ? (
                                <ArrowsPointingInIcon className='w-5' />
                            ) : (
                                <ArrowsPointingOutIcon className='w-5' />
                            )}
                        </button>
                        <Theme />
                    </div>
                )}
                <Clock small />
                <div className='flex space-x-3'>
                    <Clock small />
                    <button onClick={() => setPage('POWER')} className='text-text/70 hover:text-text'>
                        <PowerIcon className='w-5' />
                    </button>
                </div>
            </div>
        </div>
    );
}

function Theme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className='text-text/70 hover:text-text'>
            {theme == 'LIGHT' ? <MoonIcon className='w-5' /> : <SunIcon className='w-5' />}
        </button>
    );
}
