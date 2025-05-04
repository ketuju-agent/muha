import { useEffect, useState } from 'react';

import useMobile from '@/hooks/useMobile';
import { useTitleBar } from '@/utils/state';

interface ClockProps {
    small?: boolean;
}

export default function Clock({ small }: ClockProps) {
    const mobile = useMobile();
    const { titlebar } = useTitleBar();

    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        tick();

        const time = setInterval(tick, 1000);

        return () => clearInterval(time);
    }, []);

    function tick() {
        setDate(formatDate());
        setTime(formatTime());
    }

    function formatDate() {
        return new Date().toLocaleDateString([], { dateStyle: 'long' });
    }

    function formatTime() {
        const time = new Date().toLocaleTimeString([], {
            timeStyle: 'short'
        });

        if (small) return time;
        return time.replace(/ AM| PM/gm, '');
    }

    if (small) return <p className={`text-text/70 text-sm select-none ${!mobile ? '' : ''}`}>{time}</p>;
    return (
        <div style={{ paddingTop: titlebar }} className='flex flex-col items-center justify-center'>
            <p className='mt-12 text-7xl font-extrabold'>{time}</p>
            <p className='text-text/70 mt-2'>{date}</p>
        </div>
    );
}
