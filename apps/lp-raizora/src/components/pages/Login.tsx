import { FormEvent, useEffect, useRef, useState } from 'react';

import Alert from '@/components/Alert';
import useConfig from '@/hooks/useConfig';
import Layer from '@/utils/layer';
import { usePage } from '@/utils/state';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';

export default function Login() {
    const controller = useAnimation();
    const inputRef = useRef<HTMLInputElement>(null);

    const { user, translations } = useConfig();
    const { setPage } = usePage();

    const [input, setInput] = useState<string>('');
    const [hidden, setHidden] = useState<boolean>(true);
    const [tip, setTip] = useState<boolean>(false);

    useEffect(() => {
        if (!inputRef.current) return;
        inputRef.current.focus();
    }, [input]);

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        if (!user.password) return setPage('HOME');

        if (input.toLowerCase() !== user.password.toLowerCase()) {
            if (user.hint) setTip(true);

            controller.start('shake');
            return;
        }

        setPage('HOME');
    }

    return (
        <motion.div
            variants={{
                shown: { opacity: 1 },
                hidden: { opacity: 0, pointerEvents: 'none' }
            }}
            initial='shown'
            exit='hidden'
            style={Layer.style('login')}
            transition={{ duration: 0.3 }}
            className='bg-background fixed inset-0 flex flex-col items-center'>
            <div className='mt-auto'></div>
            <motion.div
                animate={controller}
                variants={{
                    shake: {
                        rotate: [0, -4, 3, -2, 0],
                        transition: {
                            duration: 0.3
                        }
                    }
                }}
                className='flex flex-col items-center'>
                <img src={user.avatar} alt={`${user.name}'s Avatar`} className='w-32 rounded-full' />
                <div className='mt-8 flex flex-col items-center space-y-2'>
                    <h1 className='text-text text-5xl font-extrabold tracking-tight'>{user.name}</h1>
                    {user.description && <p className='text-text/50'>{user.description}</p>}
                </div>
                <form onSubmit={onSubmit} className='mt-12'>
                    <div className='flex items-center'>
                        {user.password && (
                            <div className='relative'>
                                <input
                                    ref={inputRef}
                                    type={hidden ? 'password' : 'text'}
                                    placeholder='Enter password...'
                                    className='focus:!ring-none border-text/20 bg-text/10 w-[13rem] rounded-lg pr-12 !outline-0 focus:!outline-none'
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button
                                    type='button'
                                    onClick={() => setHidden(!hidden)}
                                    className='text-text/50 absolute top-1/2 right-0 h-12 w-12 -translate-y-1/2 p-[0.85rem]'>
                                    {hidden ? <EyeSlashIcon /> : <EyeIcon />}
                                </button>
                            </div>
                        )}
                        <AnimatePresence>
                            {(!user.password || input.length > 0) && (
                                <motion.div
                                    variants={{
                                        hidden: { width: 0, marginLeft: 0, opacity: 0 },
                                        shown: {
                                            width: user.password ? '3rem' : 'auto',
                                            marginLeft: user.password ? '0.75rem' : 0,
                                            opacity: 1
                                        }
                                    }}
                                    initial={!user.password ? 'shown' : 'hidden'}
                                    animate='shown'
                                    exit='hidden'
                                    className='flex overflow-hidden rounded-lg'>
                                    <button
                                        type='submit'
                                        className={`bg-main flex items-center justify-center space-x-4 transition-all hover:opacity-80 ${
                                            user.password ? 'h-12 w-12' : 'px-6 py-3'
                                        }`}>
                                        <ArrowRightIcon className='text-background w-5' />
                                        {!user.password && (
                                            <p className='text-background'>{translations?.login || 'Log In'}</p>
                                        )}
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <AnimatePresence>
                        {tip && (
                            <motion.div
                                variants={{
                                    hidden: { height: 0, opacity: 0, marginTop: 0 },
                                    shown: {
                                        height: 'auto',
                                        opacity: 1,
                                        marginTop: '1rem'
                                    }
                                }}
                                initial='hidden'
                                animate='shown'
                                exit='hidden'
                                className='flex items-center overflow-hidden rounded-md'>
                                <Alert text={user.hint} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </motion.div>
            <div className='mb-auto'></div>
        </motion.div>
    );
}
