'use client';

import { cn } from '@/lib/utils';

interface ChatBubbleProps {
    isUser?: boolean;
    time: string;
    children: React.ReactNode;
    avatar?: string;
    username?: string;
}

export function ChatBubble({ isUser, time, children, avatar, username }: ChatBubbleProps) {
    return (
        <div className={cn('flex items-end gap-1', isUser ? 'flex-row-reverse' : 'flex-row')}>
            {!isUser && (
                <div className='h-8 w-8 flex-shrink-0 overflow-hidden rounded-full'>
                    {avatar ? (
                        <img src={avatar} alt='Avatar' className='h-full w-full object-cover' />
                    ) : (
                        <div className='flex h-full w-full items-center justify-center bg-[#00A884] text-white'>T</div>
                    )}
                </div>
            )}
            <div className='relative max-w-[85%]'>
                {!isUser && username && (
                    <span className='mb-0.5 block text-xs font-medium text-[#00A884]'>{username}</span>
                )}
                <div
                    className={cn(
                        'relative rounded-[1.1rem] px-3 py-2',
                        isUser ? 'rounded-tr-sm bg-[#E7FFDB] text-[#111B21]' : 'rounded-tl-sm bg-white text-[#111B21]'
                    )}>
                    {children}
                    <span className='mt-1 block text-[0.6875rem] text-[#667781]'>{time}</span>
                </div>
                <div
                    className={cn(
                        'absolute bottom-0 h-4 w-4 overflow-hidden',
                        isUser ? 'right-[-8px]' : 'left-[-8px]'
                    )}>
                    <div
                        className={cn(
                            'absolute h-8 w-8 origin-bottom-left transform rounded-sm',
                            isUser ? 'rotate-[-45deg] bg-[#E7FFDB]' : 'rotate-[45deg] bg-white'
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
