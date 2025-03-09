'use client';

import {
    Box,
    BoxButtonReload,
    BoxContent,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';
import { getMissionFolder } from '@/drive/api';
import { DriveFile } from '@/drive/types';
import { useEffect, useState, useCallback } from 'react';

export function DocumentList({ study }: { study: string }) {
    const [missions, setMissions] = useState<undefined | DriveFile[]>();
    const [loading, setLoading] = useState(true);

    const loadMissions = useCallback(() => {
        setLoading(true);
        getMissionFolder(study).then((serverMissions) => {
            if (serverMissions !== undefined) {
                setMissions(serverMissions);
            }
            setLoading(false);
        });
    }, [study]);

    useEffect(() => {
        loadMissions();
    }, [loadMissions]);

    return (
        <Box className="w-full">
            <BoxHeader>
                <BoxTitle>Documents de l&apos;étude</BoxTitle>
                <BoxHeaderBlock>
                    <BoxButtonReload onClick={loadMissions} />
                </BoxHeaderBlock>
            </BoxHeader>
            <BoxContent>
                {loading ? (
                    <p>Loading...</p>
                ) : missions === undefined ? (
                    <p>
                        Erreur lors de la mise à jour des documents.. Merci de faire un ticket SOS
                        (en haut à droite).
                    </p>
                ) : missions.length !== 0 ? (
                    missions.map((mission) => (
                        <p className="bg-accent p-2 rounded-sm" key={mission.id}>
                            {mission.name}
                        </p>
                    ))
                ) : (
                    <p>Aucun document n'est présent dans le dossier d'étude.</p>
                )}
            </BoxContent>
        </Box>
    );
}
