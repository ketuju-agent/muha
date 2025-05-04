import { useEffect } from 'react';

import { useBackButton } from '@/utils/state';

export default function useBack(callback: () => void, enabled = true) {
    const { setBackButton } = useBackButton();

    useEffect(() => {
        if (!enabled) {
            setBackButton((current) => (current == callback ? null : current));
            return;
        }

        setBackButton(() => callback);

        return () => setBackButton((current) => (current == callback ? null : current));
    }, [enabled]);
}
