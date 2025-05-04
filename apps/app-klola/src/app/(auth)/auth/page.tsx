import Image from 'next/image';

import { LoginForm } from '@/shared/components/auth/auth-form';
import BaseTemplate from '@/shared/components/templates/base-layout';
import { GalleryVerticalEnd } from 'lucide-react';

const LoginPage = () => {
    return (
        <BaseTemplate>
            <div className='grid min-h-svh lg:grid-cols-2'>
                <div className='flex flex-col gap-4 p-6 md:p-10'>
                    <div className='flex justify-center gap-2 md:justify-start'>
                        <a href='#' className='flex items-center gap-2 font-medium'>
                            <div className='bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md'>
                                <GalleryVerticalEnd className='size-4' />
                            </div>
                            Acme Inc.
                        </a>
                    </div>
                    <div className='flex flex-1 items-center justify-center'>
                        <div className='w-full max-w-xs'>
                            <LoginForm />
                        </div>
                    </div>
                </div>
                <div className='bg-muted relative hidden lg:block'>
                    <Image
                        src='https://ui.shadcn.com/placeholder.svg'
                        alt='Image'
                        width={1920}
                        height={1080}
                        className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
                    />
                </div>
            </div>
        </BaseTemplate>
    );
};

export default LoginPage;
