import Window from '@/components/Window';
import { useWindows } from '@/utils/state';

import { AnimatePresence } from 'framer-motion';

export default function Windows() {
    const { windows } = useWindows();

    return (
        <AnimatePresence>
            {windows.map((window) => (
                <Window key={window.id} {...window} />
            ))}
        </AnimatePresence>
    );
}
