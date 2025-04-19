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
import { FaBug, FaCheck } from 'react-icons/fa6';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

/**
 * @enum {number}
 * @brief Represents the status of an operation.
 *
 * This enum is used to indicate whether an operation was successful or failed.
 *
 * Every variant is associated to an icon, as the goal of this type is used to give feedback to the user on whether an operation was successful or not.
 */
export enum UpdateBoxStatus {
    /**
     * The operation was successful.
     *
     * The operation was executed and the check was successful.
     */
    Ok,
    /**
     * An error occurred while running the action.
     *
     * This regroups unexpected errors on the server side, and must be fixed by raising an SOS ticket.
     */
    Error,
    /**
     * The operation executed successfully, but the checks returned a negative result: the database and the client are not synchronised.
     */
    NotSynced,
    /**
     * The operation is still in progress.
     *
     * This is typically when the operation needs interaction with the database or with Google Drive, and thus takes time to execute.
     */
    Loading,
}

/**
 * @function getIcon
 * @brief Returns an icon configuration based on the given update box status.
 *
 * @param {UpdateBoxStatus} status - The current status of the update box.
 * @returns {{ Icon: React.ComponentType, className?: string }} An object containing the icon component and optional className.
 */
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
    }
}

/**
 * @interface UpdateBoxProps
 * @brief Props for the UpdateBox component.
 *
 * @property {string} title - The title displayed in the update box.
 * @property {ReactNode} children - The content rendered inside the update box.
 * @property {UpdateBoxStatus} status - The current status of the update box, affecting the icon.
 * @property {() => void} update - Callback function triggered when the update icon is clicked.
 */
interface UpdateBoxProps {
    title: string;
    children: ReactNode;
    status: UpdateBoxStatus;
    update: () => void;
}

/**
 * @function UpdateBox
 * @brief A UI component that displays an update section with a title, content, and status icon.
 *
 * @param {UpdateBoxProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered update box.
 */
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
