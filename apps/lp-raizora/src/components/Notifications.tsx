import { useEffect, useState } from 'react';

import useConfig from '@/hooks/useConfig';
import useWindow from '@/hooks/useWindow';
import Layer from '@/utils/layer';
import { useNotifications } from '@/utils/state';
import { App } from '@apps';

import { AnimatePresence, motion } from 'framer-motion';

export interface Notification {
    id: string;
    icon: string;
    title: string;
    description: string;
    click?: string;
    read: boolean;
}

export default function Notifications() {
    const [shown, setShown] = useState<Notification[]>([]);
    const { notifications, setNotifications } = useNotifications();

    useEffect(() => {
        if (!notifications) return;
        const unread = notifications.filter((n) => !n.read);
        if (!unread.length) return;

        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
        setShown([...shown, ...unread]);

        setTimeout(() => {
            setShown((prev) => prev.filter((n) => !unread.map((n) => n.id).includes(n.id)));
        }, 7000);
    }, [notifications]);

    return (
        <div style={Layer.style('notifications')} className='fixed top-16 right-5 flex flex-col space-y-6'>
            <AnimatePresence>
                {shown.map((notification) => (
                    <Notification key={notification.id} {...notification} />
                ))}
            </AnimatePresence>
        </div>
    );
}

interface NotificationProps extends Notification {
    animated?: boolean;
}

export function Notification({ icon, title, description, animated, click }: NotificationProps) {
    const { open } = useWindow();

    function onClick() {
        if (!click) return;
        open(click);
    }

    return (
        <motion.div
            onClick={onClick}
            variants={{
                hidden: { translateY: '-150%', opacity: 0 },
                shown: { translateY: '0%', opacity: 1 }
            }}
            initial={animated == false ? 'shown' : 'hidden'}
            animate='shown'
            exit={animated == false ? 'shown' : 'hidden'}
            transition={{ ease: 'linear', duration: 0.2 }}
            className={`bg-background w-[20rem] overflow-hidden rounded-xl select-none ${
                animated == false ? '' : 'shadow-shadow/10 shadow-md'
            } ${click ? 'cursor-pointer' : ''}`}>
            <div className={`bg-text/10 flex h-full w-full items-center space-x-4 p-4`}>
                <div className='flex min-w-8 items-center'>
                    <img src={icon} alt={title} className='h-8' />
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <p className='text-text text-lg font-semibold'>{title}</p>
                    <p className='text-text/70 text-sm'>{description}</p>
                </div>
            </div>
        </motion.div>
    );
}
