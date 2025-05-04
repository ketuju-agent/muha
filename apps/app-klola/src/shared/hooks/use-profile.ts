import { create } from 'zustand';
import { ChatState } from '../types/chat';

export const useChatStore = create<ChatState>((set) => ({
    showProfile: true,
    toggleProfile: () => set((state) => ({ showProfile: !state.showProfile })),
    setShowProfile: (value) => set({ showProfile: value }),
}));
