'use client';

import type { PropsWithChildren } from 'react';
import React, { useRef } from 'react';

import { cn } from '@/utils/styles';

import { type VariantProps, cva } from 'class-variance-authority';
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';

export interface DockProps extends VariantProps<typeof dockVariants> {
    className?: string;
    magnification?: number;
    distance?: number;
    direction?: 'top' | 'middle' | 'bottom';
    children: React.ReactNode;
}

export interface DockIconProps {
    mouseX?: MotionValue<number>;
    magnification?: number;
    distance?: number;
    [key: string]: any; // For any other props
  }

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
    'supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md'
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
    (
        {
            className,
            children,
            magnification = DEFAULT_MAGNIFICATION,
            distance = DEFAULT_DISTANCE,
            direction = 'bottom',
            ...props
        },
        ref
    ) => {
        const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

        const renderChildren = () => {
            return React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === DockIcon) {
                    return React.cloneElement(child as React.ReactElement<DockIconProps>, {
                        ...(child.props || {}),
                        mouseX,
                        magnification,
                        distance
                    });
                }
                return child;
            });
        };

        return (
            <motion.div
                ref={ref}
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
                {...props}
                className={cn(dockVariants({ className }), {
                    'items-start': direction === 'top',
                    'items-center': direction === 'middle',
                    'items-end': direction === 'bottom'
                })}>
                {renderChildren()}
            </motion.div>
        );
    }
);

Dock.displayName = 'Dock';

export interface DockIconProps {
    size?: number;
    magnification?: number;
    distance?: number;
    mouseX?: MotionValue<number>;
    className?: string;
    children?: React.ReactNode;
    props?: PropsWithChildren;
}

function DockIcon({
    size,
    magnification = DEFAULT_MAGNIFICATION,
    distance = DEFAULT_DISTANCE,
    mouseX,
    className,
    children,
    ...props
}: DockIconProps) {
    const ref = useRef<HTMLDivElement>(null);

    const distanceCalc = useTransform(mouseX as MotionValue<number>, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distanceCalc, [-distance, 0, distance], [40, magnification, 40]);

    const width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12
    });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className={cn('flex aspect-square cursor-pointer items-center justify-center rounded-full', className)}
            {...props}>
            {children}
        </motion.div>
    );
}

DockIcon.displayName = 'DockIcon';

export { Dock, DockIcon, dockVariants };
