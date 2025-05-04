'use client';

import { MouseEvent as ReactMouseEvent, useEffect, useState } from 'react';

import Clock from '@/components/Clock';
import Shortcuts from '@/components/Shortcuts';
import useMobile from '@/hooks/useMobile';
import Layer from '@/utils/layer';
import { useSelected, useTitleBar } from '@/utils/state';
import { cn } from '@/utils/styles';
import { useInkCursor } from '@packages/ui/components/motions/ink-cursor';

import Dock from './dock/dock';
import { AnimatedGridPattern } from './motions/animated-grid-pattern';
import { MorphingText } from './motions/text-morph';

interface Position {
    x: number;
    y: number;
}

interface Rect {
    top: number;
    left: number;
    width: number;
    height: number;
}

export default function Desktop() {
    const mobile = useMobile();

    const { setSelected } = useSelected();
    const { titlebar } = useTitleBar();

    const [start, setStart] = useState<Position | null>(null);
    const [rect, setRect] = useState<Rect | null>(null);
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        window.addEventListener('blur', onBlur);
        return () => window.removeEventListener('blur', onBlur);
    }, []);

    useEffect(() => {
        document.body.addEventListener('mouseleave', onBlur);
        return () => document.body.removeEventListener('mouseleave', onBlur);
    }, []);

    useEffect(() => {
        if (dragging) return;
        setRect(null);
    }, [dragging]);

    function onBlur() {
        setDragging(false);
    }

    function onPointerDown(e: ReactMouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();

        setStart({ x: e.clientX, y: e.clientY });
        setDragging(true);
        setSelected([]);
    }

    function onPointerUp(e: ReactMouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        setDragging(false);
    }

    function onPointerMove(e: ReactMouseEvent<HTMLDivElement, MouseEvent>) {
        if (!start) return;

        const current = { x: e.clientX, y: e.clientY };

        let top = start.y;
        let left = start.x;
        let width = current.x - start.x;
        let height = current.y - start.y;

        if (current.x < start.x) {
            left = current.x;
            width = start.x - current.x;
        }

        if (current.y < start.y) {
            top = current.y;
            height = start.y - current.y;
        }

        const shortcuts = Array.from(document.querySelectorAll('.shortcut'));
        const selected: string[] = [];

        shortcuts.forEach((shortcut) => {
            const rect = shortcut.getBoundingClientRect();

            if (
                rect.top < top + height &&
                rect.top + rect.height > top &&
                rect.left < left + width &&
                rect.left + rect.width > left
            )
                selected.push(shortcut.id);
        });

        setSelected(selected);

        setRect({
            top,
            left,
            width,
            height
        });
    }

    const inkCursor = useInkCursor();

    return (
        <div
            id='desktop'
            style={{
                top: titlebar,
                height: mobile ? 'calc(100vh - 2.5rem)' : '100vh'
            }}
            className={`relative flex w-screen flex-col justify-start overflow-x-hidden overflow-y-auto ${
                mobile ? '' : 'p-8 pr-2'
            }`}>
            <div className='bg-background fixed top-0 left-0 flex h-full w-full content-center items-center justify-center overflow-hidden rounded-lg border p-20'>
                <MorphingText texts={['Mengakar', 'Kuat', 'Bertumbuh', 'Bersama']} />
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
                        'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
                    )}
                />
            </div>
            <Shortcuts />
            <Dock />
            <div className='fixed top-0 left-0 z-[9]'>{inkCursor}</div>
            <div
                onPointerDown={mobile ? undefined : onPointerDown}
                onPointerUp={mobile ? undefined : onPointerUp}
                onPointerMove={dragging ? onPointerMove : undefined}
                style={{
                    zIndex: dragging ? Layer.zIndex('desktop.active') : Layer.zIndex('desktop.inactive')
                }}
                className='absolute inset-0 !m-0'>
                {rect && (
                    <div
                        style={{ ...rect, zIndex: Layer.zIndex('desktop.rect') }}
                        className='border-main/30 bg-main/20 fixed border-2'></div>
                )}
            </div>
        </div>
    );
}
