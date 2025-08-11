import { ReactNode } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaBan, FaBug, FaCheck, FaUser } from 'react-icons/fa6';
import { IoWarning } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

import {
    Box,
    BoxButtonIcon,
    BoxContent,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';

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
    /**
     * The update function can't be run yet: the user hasn't finished.
     *
     * This is used when you need to fill all the entries before updating, all the data shouldn't be saved automatically.
     */
    UserPending,
}

/** An object containing information needed to display the status on the {@link UpdateBox}. */
interface StatusInfos {
    /** Icon displayed */
    Icon: IconType;
    /** Status-specific styles (e.g. red colour for errors) */
    iconClassName?: string;
    /** Description displayed when hovering the status icon. */
    hoverContent: string;
}

/**
 * @function getUpdateBoxStatusInfos
 * @brief Returns an icon configuration based on the given update box status.
 *
 * @param {UpdateBoxStatus} status - The current status of the update box.
 * @returns {StatusInfos} The data needed to display the status.
 */
export function getUpdateBoxStatusInfos(status: UpdateBoxStatus, editable: boolean): StatusInfos {
    if (!editable) return { Icon: FaBan, hoverContent: "Le contenu n'est plus modifiable" };

    switch (status) {
        case UpdateBoxStatus.Ok:
            return {
                Icon: FaCheck,
                hoverContent: 'Le serveur a synchronisé vos données avec succès.',
            };
        case UpdateBoxStatus.Loading:
            return {
                Icon: AiOutlineLoading3Quarters,
                iconClassName: 'animate-spin',
                hoverContent:
                    'Le serveur est en cours de synchronisation, merci de patienter avant de quitter la page.',
            };
        case UpdateBoxStatus.Error:
            return {
                Icon: IoWarning,
                iconClassName: 'text-destructive',
                hoverContent:
                    "Le serveur n'a pas pu sauvegarder vos données. Faites un Ticket SOS!",
            };
        case UpdateBoxStatus.NotSynced:
            return {
                Icon: FaBug,
                iconClassName: 'text-destructive',
                hoverContent:
                    "Le serveur est toujours vivant, mais vos données n'ont pas été sauvegardées 🤔. Réessayez!",
            };
        case UpdateBoxStatus.UserPending:
            return {
                Icon: FaUser,
                iconClassName: 'text-destructive',
                hoverContent:
                    'Lorsque vous avez terminé, cliquez ici pour sauvegarder. Attention, en attendant, vos données ne sont pas sauvegardée.',
            };
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
 * @property {boolean} withBackdrop - Boolean to indicate if the box should have a backdrop.
 * @property {boolean} editable - Boolean to indicate if the content can still be edited.
 * This makes the update button clickable or not.
 */
interface UpdateBoxProps {
    title: string;
    children: ReactNode;
    status: UpdateBoxStatus;
    update: () => void;
    withBackdrop?: boolean;
    editable?: boolean;
}

/**
 * @function UpdateBox
 * @brief A UI component that displays an update section with a title, content, and status icon.
 *
 * @param {UpdateBoxProps} props - The properties for the component.
 */
export function UpdateBox({
    title,
    children,
    status,
    update,
    withBackdrop = true,
    editable = true,
}: UpdateBoxProps) {
    'use client';
    return (
        <Box className="w-full" withBackdrop={withBackdrop}>
            <BoxHeader>
                <BoxTitle>{title}</BoxTitle>
                <BoxHeaderBlock>
                    <BoxButtonIcon
                        {...getUpdateBoxStatusInfos(status, editable)}
                        onClick={() => {
                            if (editable) update();
                        }}
                    />
                </BoxHeaderBlock>
            </BoxHeader>
            <BoxContent>{children}</BoxContent>
        </Box>
    );
}
