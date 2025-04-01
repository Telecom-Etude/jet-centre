import {
    Box,
    BoxButtonIcon,
    BoxContent,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';
import { ReactNode } from 'react';
import { IoWarning } from 'react-icons/io5';
import { FaBug, FaCheck, FaQuestion } from 'react-icons/fa6';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export enum UpdateBoxStatus {
    Ok,
    Error,
    NotSynced,
    Loading,
    NotFound,
}

function getIcon(status: UpdateBoxStatus) {
    switch (status) {
        case UpdateBoxStatus.Ok:
            return { Icon: FaCheck };
        case UpdateBoxStatus.Loading:
            return { Icon: AiOutlineLoading3Quarters, className: 'animate-spin' };
        case UpdateBoxStatus.Error:
            return { Icon: IoWarning, className: 'text-destructive' };
        case UpdateBoxStatus.NotSynced:
            return { Icon: FaBug, className: 'text-destructive' };
        case UpdateBoxStatus.NotFound:
            return { Icon: FaQuestion, className: 'text-destructive' };
    }
}

interface UpdateBoxProps {
    title: string;
    children: ReactNode;
    status: UpdateBoxStatus;
    update: () => void;
}

export function UpdateBox({ title, children, status, update }: UpdateBoxProps) {
    'use client';
    return (
        <Box className="w-full">
            <BoxHeader>
                <BoxTitle>{title}</BoxTitle>
                <BoxHeaderBlock>
                    <BoxButtonIcon {...getIcon(status)} onClick={update} />
                </BoxHeaderBlock>
            </BoxHeader>
            <BoxContent>{children}</BoxContent>
        </Box>
    );
}
