'use client';

import Link from 'next/link';
import { ReactNode, forwardRef } from 'react';
import AnimateHeight from 'react-animate-height';
import { FaGripLines, FaPen, FaPlus, FaTrash } from 'react-icons/fa6';
import { GoProjectTemplate } from 'react-icons/go';
import { HiRefresh } from 'react-icons/hi';
import { IconType } from 'react-icons/lib';

import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { ANIMATION_DURATION_MS } from '@/settings/vars';


const Box = forwardRef<
    HTMLDivElement,
    { children: ReactNode; className?: string | string[] } & Omit<any, 'children' | 'className'>
>(({ children, className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'flex flex-col',
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

const InnerBox = forwardRef<
    HTMLDivElement,
    { children: ReactNode; className?: string | string[] } & Omit<any, 'children' | 'className'>
>(({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('rounded-xl bg-background flex flex-col ', className)} {...props}>
        {children}
    </div>
));

const BoxHeader = forwardRef<
    HTMLDivElement,
    { children: ReactNode; className?: string | string[] } & Omit<any, 'children' | 'className'>
>(({ children, className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'bg-box-title/50 py-2 px-4',
            'border-b border-box-hover/10 rounded-t-xl',
            'flex justify-between items-center gap-4',
            className
        )}
        {...props}
    >
        {children}
    </div>
));

const BoxHeaderBlock = ({ children, className }: { children?: ReactNode; className?: string }) => (
    <div className={cn('flex justify-between items-center gap-2', className)}>{children}</div>
);

type Height = 'auto' | 'limited';

const BoxContent = ({
    children,
    height = 'auto',
    noPadding = false,
}: {
    children: ReactNode;
    height?: Height;
    noPadding?: boolean;
}) => (
    <div
        className={cn(
            'space-y-4 flex-grow max-h-full',
            height === 'auto' && 'h-auto max-h-auto',
            height === 'limited' && '',
            noPadding ? 'p-0' : 'p-4'
        )}
    >
        {children}
    </div>
);

const BoxCollapser = ({
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

const BoxLink = ({ children, href }: { children: string | string[]; href: string }) => (
    <Button variant="link" className="px-0 py-0 h-fit text-link">
        <Link href={href}>{children}</Link>
    </Button>
);

const BoxTitle = ({ children, className }: { children: string | string[]; className?: string }) => (
    <h2 className={cn('font-semibold text-lg overflow-hidden text-ellipsis', className)}>
        {children}
    </h2>
);

const BoxButtonLabelPlus = ({
    onClick,
    label,
    className,
}: {
    onClick: () => void;
    label?: string;
    className?: string;
}) => (
    <Button
        onClick={onClick}
        variant="outline"
        className={cn('flex flex-row gap-2 rounded-xl p-2 h-10', className)}
    >
        <FaPlus className="w-full h-full" />
        {label}
    </Button>
);

const BoxButtonPlus = (props: BoxButtonProps) => BoxButtonIcon({ ...props, Icon: FaPlus });
const BoxButtonTemplate = (props: BoxButtonProps) =>
    BoxButtonIcon({ ...props, Icon: GoProjectTemplate });
const BoxButtonTrash = (props: BoxButtonProps) => BoxButtonIcon({ ...props, Icon: FaTrash });
const BoxButtonReload = (props: BoxButtonProps) => BoxButtonIcon({ ...props, Icon: HiRefresh });
const BoxButtonEdit = (props: BoxButtonProps) => BoxButtonIcon({ ...props, Icon: FaPen });

interface BoxButtonProps {
    onClick: () => void;
}

const BoxButton = ({ onClick, children }: BoxButtonProps & { children: ReactNode }) => (
    <Button
        onClick={() => onClick()}
        variant="title"
        className="p-[3.5px] h-6 w-6 bg-transparent hover:bg-transparent"
    >
        {children}
    </Button>
);

interface BoxButtonIconProps extends BoxButtonProps {
    Icon: IconType;
    iconClassName?: string;
    hoverContent?: string;
}

const BoxButtonIcon = ({ onClick, Icon, iconClassName, hoverContent }: BoxButtonIconProps) => {
    const button = (
        <BoxButton onClick={onClick}>
            <Icon className={cn('w-full h-full', iconClassName)} />
        </BoxButton>
    );
    return hoverContent ? (
        <HoverCard>
            <HoverCardTrigger>{button}</HoverCardTrigger>
            <HoverCardContent>{hoverContent}</HoverCardContent>
        </HoverCard>
    ) : (
        button
    );
};

const BoxDragHandle = forwardRef<HTMLDivElement>((props, ref) => (
    <div className="h-6 w-6 content-center" ref={ref} {...props}>
        <FaGripLines />
    </div>
));

const BoxCollapseButton = ({
    collapse,
    setCollapse,
    onClick,
}: {
    collapse: boolean;
    setCollapse: (c: boolean) => void;
    onClick?: () => void;
}) => {
    function toggleCollapse() {
        if (onClick) {
            onClick();
        }
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

export {
    Box,
    BoxButtonLabelPlus,
    BoxButtonTemplate,
    BoxButtonPlus,
    BoxButtonTrash,
    BoxButtonIcon,
    BoxButtonEdit,
    BoxButtonReload,
    BoxCollapseButton,
    BoxCollapser,
    BoxContent,
    BoxDragHandle,
    BoxHeader,
    BoxHeaderBlock,
    BoxLink,
    BoxTitle,
    InnerBox,
};
