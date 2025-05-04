import { Avatar, AvatarFallback, AvatarImage } from '@packages/ui/components/base/avatar';
import { Card } from '@packages/ui/components/base/card';

import { Globe, MapPin, MessageSquareMore, Settings } from 'lucide-react';

export function ChatInterface() {
    return (
        <Card className='mx-auto w-full max-w-4xl bg-white shadow-xl'>
            <div className='p-8 lg:p-10'>
                <div className='mb-8 flex items-start gap-5'>
                    <Avatar className='h-14 w-14'>
                        <AvatarImage src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-cruip-tutorials-vercel-app-progress-slider-2025-02-16-10_59_19-y0YUFmPsLYLc3a2feeEVzZ0bxSXXgt.png' />
                        <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div className='flex-1'>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-xl font-semibold'>Mary Coyle</h3>
                            <div className='flex items-center gap-4'>
                                <span className='text-muted-foreground text-[14px]'>Online</span>
                                <Settings className='h-5 w-5 text-gray-400' />
                            </div>
                        </div>
                        <div className='text-muted-foreground mt-3 flex items-center gap-8 text-[14px]'>
                            <div className='flex items-center gap-2'>
                                <MapPin className='h-4 w-4' />
                                <span>Williamsburg, VA</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Globe className='h-4 w-4' />
                                <a href='#' className='text-[#6366F1]'>
                                    acme.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='space-y-8'>
                    <div className='flex gap-4'>
                        <Avatar className='h-9 w-9'>
                            <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <div className='max-w-2xl flex-1 rounded-2xl bg-[#6366F1] p-5 text-[14px] text-white'>
                            Hey Mark, how can I help you today?
                        </div>
                        <div className='w-9' />
                    </div>
                    <div className='flex items-end justify-end gap-4'>
                        <div className='flex-1 text-right text-[14px]'>Hey Mary 👋</div>
                        <div className='flex h-9 w-9 items-center justify-center rounded-full bg-blue-100'>
                            <span className='text-[14px] text-[#6366F1]'>→</span>
                        </div>
                    </div>
                </div>
            </div>

            <button className='absolute right-8 -bottom-20 flex h-16 w-16 items-center justify-center rounded-full bg-[#6366F1] text-white shadow-lg'>
                <MessageSquareMore className='h-7 w-7' />
            </button>
        </Card>
    );
}
