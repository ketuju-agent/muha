import { useEffect, useState } from 'react';

interface TabMessage {
    message: string;
    timestamp: number;
}

const useTabManager = () => {
    const [isDuplicate, setIsDuplicate] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);
    const [tabId] = useState<string>(() => Math.random().toString(36).substring(2, 15));

    useEffect(() => {
        // Initialize this tab
        localStorage.setItem('currentTabId', tabId);

        const checkDuplicates = () => {
            const currentTabId = localStorage.getItem('currentTabId');
            setIsDuplicate(currentTabId !== tabId);
        };

        const handleStorageChange = (e: StorageEvent) => {
            // Handle tab ID changes
            if (e.key === 'currentTabId') {
                checkDuplicates();
            }
            // Handle messages
            if (e.key === 'tabMessage') {
                try {
                    const data: TabMessage = JSON.parse(e.newValue || '{}');
                    setMessage(data.message);
                } catch (err) {
                    console.error('Error parsing tab message:', err);
                }
            }
        };

        // Initial check
        checkDuplicates();

        // Set up event listeners
        window.addEventListener('storage', handleStorageChange);

        // Regular check for duplicate tabs
        const interval = setInterval(checkDuplicates, 1000);

        // Cleanup
        return () => {
            if (localStorage.getItem('currentTabId') === tabId) {
                localStorage.removeItem('currentTabId');
            }
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval);
        };
    }, [tabId]);

    const broadcastMessage = (message: string) => {
        localStorage.setItem(
            'tabMessage',
            JSON.stringify({
                message,
                timestamp: Date.now()
            } as TabMessage)
        );
    };

    return {
        isDuplicate,
        message,
        broadcastMessage,
        tabId
    };
};

export default useTabManager;
