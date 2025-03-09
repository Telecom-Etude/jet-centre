'use client';

import {
    Box,
    BoxButtonReload,
    BoxContent,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';
import { Button } from '@/components/ui/button';
import { getMissionFiles } from '@/drive/api';
import { DriveFile, googleUrl } from '@/drive/interface';
import { useEffect, useState, useCallback } from 'react';
import { FaArrowRightFromBracket, FaArrowUpFromBracket } from 'react-icons/fa6';
import Link from 'next/link';

export function DocumentList({ study }: { study: string }) {
    const [selectedFile, selectFile] = useState<undefined | DriveFile>();

    return (
        <div className="flex h-full">
            <FileExplorer study={study} selectFile={selectFile} />
            {selectedFile && <FrameFile file={selectedFile} />}
        </div>
    );
}

function FrameFile({ file }: { file: DriveFile }) {
    return (
        <iframe
            src={googleUrl(file.id, file.mimeType)}
            className="w-full flex justify-center h-full"
        >
            Loading...
        </iframe>
    );
}

function FileExplorer({
    study,
    selectFile,
}: {
    study: string;
    selectFile: (id: DriveFile) => void;
}) {
    const [missions, setMissions] = useState<undefined | DriveFile[]>();
    const [loading, setLoading] = useState(true);

    const loadMissions = useCallback(() => {
        setLoading(true);
        getMissionFiles(study).then((serverMissions) => {
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
                    <div className="flex flex-col">
                        {missions.map((mission) => (
                            <div className="bg-accent text-start p-2 rounded-sm" key={mission.id}>
                                <p>{mission.name}</p>
                                <Button variant="ghost" asChild>
                                    <Link href="">
                                        <FaArrowUpFromBracket />
                                    </Link>
                                </Button>
                                <Button variant="ghost" onClick={() => selectFile(mission)}>
                                    <FaArrowRightFromBracket />
                                </Button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Aucun document n'est présent dans le dossier d'étude.</p>
                )}
            </BoxContent>
        </Box>
    );
}
