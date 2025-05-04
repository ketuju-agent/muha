'use client';

import type React from 'react';
import { type FormEvent, useState } from 'react'

import { cn } from '@/shared/lib/utils';
import { Button } from '@ui/components/base/button';
import { Input } from '@ui/components/base/input';
import { Label } from '@ui/components/base/label';

import { signIn } from 'next-auth/react';

export function LoginForm({ className, ...props }: React.ComponentProps<'form'>) {
    const [userName, setUsername] = useState<undefined | string>('emilys');
    const [password, setPassword] = useState<undefined | string>('emilyspass');

    function HandleSubmit(e: FormEvent) {
        e.preventDefault();
        signIn('credentials', {
            username: userName,
            password,
            callbackUrl: '/dashboard'
        });
    }

    return (
        <form className={cn('flex flex-col gap-6', className)} {...props} onSubmit={HandleSubmit}>
            <div className='flex flex-col items-center gap-2 text-center'>
                <h1 className='text-2xl font-bold'>Login to your account</h1>
                <p className='text-muted-foreground text-sm text-balance'>
                    Enter your email below to login to your account
                </p>
            </div>
            <div className='grid gap-6'>
                <div className='grid gap-2'>
                    <Label htmlFor='username'>Email</Label>
                    <Input
                        onChange={(e) => setUsername(e.target.value)}
                        value={userName}
                        id='username'
                        type='text'
                        placeholder=''
                    />
                </div>
                <div className='grid gap-2'>
                    <div className='flex items-center'>
                        <Label htmlFor='password'>Password</Label>
                        <a href='#' className='ml-auto text-sm underline-offset-4 hover:underline'>
                            Forgot your password?
                        </a>
                    </div>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        id='password'
                        type='password'
                        value={password}
                    />
                </div>
                <Button type='submit' className='w-full'>
                    Sign In
                </Button>
                <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
                    <span className='bg-background text-muted-foreground relative z-10 px-2'>Or continue with</span>
                </div>
            </div>
        </form>
    );
}
