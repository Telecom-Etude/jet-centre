'use client';

import { ReactNode, forwardRef } from 'react';
import Link from 'next/link';

import AnimateHeight from 'react-animate-height';
import { FaGripLines, FaPlus } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ANIMATION_DURATION_MS } from '@/settings/vars';

export const Box = forwardRef<
    HTMLDivElement,
    { children: ReactNode; className?: string | string[] } & Omit<any, 'children' | 'className'>
>(({ children, className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'flex flex-col',
            'overflow-hidden',
            'border border-box-hover/10',
            'rounded-xl bg-box-background',
            'shadow-lg shadow-black/5',
            'backdrop-blur-sm',
            'transition-all duration-200 ease-in-out',
            'hover:border-box-hover/20',
            className
        )}
        {...props}
    >
        {children}
    </div>
));

export const InnerBox = forwardRef<
    HTMLDivElement,
    { children: ReactNode; className?: string | string[] } & Omit<any, 'children' | 'className'>
>(({ children, className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('rounded-xl bg-background flex flex-col overflow-auto', className)}
        {...props}
    >
        {children}
    </div>
));

export const BoxHeader = ({ children, ...props }: { children?: ReactNode }) => (
    <div
        className={cn(
            'bg-box-title/50 p-4',
            'border-b border-box-hover/10',
            'flex justify-between items-center'
        )}
        {...props}
    >
        {children}
    </div>
);

export const BoxHeaderBlock = ({ children }: { children?: ReactNode }) => (
    <div className="flex justify-between items-center gap-2">{children}</div>
);

export type Height = 'auto' | 'limited';

export const BoxContent = ({
    children,
    height = 'auto',
}: {
    children: ReactNode;
    height?: Height;
}) => (
    <div
        className={cn(
            'p-4 space-y-4 flex-grow overflow-y-scroll max-h-full',
            height === 'auto' && 'h-auto max-h-auto overflow-y-auto',
            height === 'limited' && ''
        )}
    >
        {children}
    </div>
);

export const BoxCollapser = ({
    children,
    collapse = false,
}: {
    children: ReactNode;
    collapse: boolean;
}) => (
    <AnimateHeight height={collapse ? 0 : 'auto'} duration={ANIMATION_DURATION_MS}>
        {children}
    </AnimateHeight>
);

export const BoxLink = ({ children, href }: { children: string | string[]; href: string }) => (
    <Button variant="link" className="px-0 py-0 h-fit text-link">
        <Link href={href}>{children}</Link>
    </Button>
);

export const BoxTitle = ({ children }: { children: string | string[] }) => (
    <h2 className="font-semibold text-lg">{children}</h2>
);

export const BoxButtonPlus = ({ onClick }: { onClick: () => void }) => (
    <Button onClick={onClick} variant="title" className="rounded-xl p-4 w-14 h-14">
        <FaPlus className="w-full h-full" />
    </Button>
);

export const BoxDragHandle = forwardRef<HTMLDivElement>((props, ref) => (
    <div className="h-6 w-6 content-center" ref={ref} {...props}>
        <FaGripLines />
    </div>
));

export const BoxCollapseButton = ({
    collapse,
    setCollapse,
    onClick,
}: {
    collapse: boolean;
    setCollapse: (c: boolean) => void;
    onClick?: () => void;
}) => {
    function toggleCollapse() {
        onClick && onClick();
        setCollapse(!collapse);
    }

    return (
        <Button
            onClick={toggleCollapse}
            variant="title"
            className="p-0 h-6 w-6 bg-transparent hover:bg-transparent"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                {collapse ? (
                    <>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M 8 7 l 4 -4 4 4"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M 16 17 l -4 4 -4 -4"
                        />
                    </>
                ) : (
                    // Les flèches sont décalées de 0.5px pour compenser les illusions d'optique dues à l’œil humain
                    // See: http://designwithfontforge.com/en-US/Trusting_Your_Eyes.html#perceived-height
                    <>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M 16 3 l -4 4 -4 -4"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M 8 21 l 4 -4 4 4"
                        />
                    </>
                )}
            </svg>
        </Button>
    );
};
