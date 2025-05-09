'use client';

import { HTMLAttributes, useState } from 'react';

import { cn } from '@ui/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/components/base/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/components/base/form';
import { Input } from '@ui/components/base/input';
import { PasswordInput } from '@ui/components/base/password-input';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

const formSchema = z.object({
    email: z.string().min(1, { message: 'Please enter your email' }).email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(1, {
            message: 'Please enter your password'
        })
        .min(7, {
            message: 'Password must be at least 7 characters long'
        })
});

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        setIsLoading(true);

        console.log(data);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='grid gap-2'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className='space-y-1'>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder='name@example.com' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem className='space-y-1'>
                                    <div className='flex items-center justify-between'>
                                        <FormLabel>Password</FormLabel>
                                        <a
                                            href='/forgot-password'
                                            className='text-muted-foreground text-sm font-medium hover:opacity-75'>
                                            Forgot password?
                                        </a>
                                    </div>
                                    <FormControl>
                                        <PasswordInput placeholder='********' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='mt-2' disabled={isLoading}>
                            Login
                        </Button>

                        <div className='relative my-2'>
                            <div className='absolute inset-0 flex items-center'>
                                <span className='w-full border-t' />
                            </div>
                            <div className='relative flex justify-center text-xs uppercase'>
                                <span className='bg-background text-muted-foreground px-2'>Or continue with</span>
                            </div>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}
