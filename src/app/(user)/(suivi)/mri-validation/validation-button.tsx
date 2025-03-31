'use client';

import { Button } from '@/components/ui/button';
import { MriStatus } from '@prisma/client';
import { useState } from 'react';
import { setMriStatus } from '../../(cdp)/[study]/mri/form/mri';
import { FaBug, FaCheck } from 'react-icons/fa6';
import { LoadingFullStops } from '@/components/loading';

interface ValidationButtonProps {
    status: MriStatus;
    mriId: string;
}

export function ValidationButton({ status, mriId }: ValidationButtonProps) {
    const [getStatus, setStatus] = useState<MriStatus | undefined>(status);
    const [loading, setLoading] = useState(false);

    return loading ? (
        <div className="flex space-x-2 items-center">
            <LoadingFullStops />
        </div>
    ) : getStatus === undefined ? (
        <div className="flex space-x-2 items-center">
            <p>Error...</p>
            <FaBug />
        </div>
    ) : getStatus === MriStatus.Sent ? (
        <div className="flex space-x-2 items-center">
            <p>Envoyé</p>
            <FaCheck />
        </div>
    ) : (
        <Button
            type="submit"
            variant="outline"
            onClick={() => {
                setLoading(true);
                if (getStatus == MriStatus.Validated) {
                    // TODO: send the MRI
                    setMriStatus(mriId, MriStatus.Sent).then((mri) => {
                        setStatus(mri?.status);
                        setLoading(false);
                    });
                } else {
                    setMriStatus(mriId, MriStatus.Validated).then((mri) => {
                        setStatus(mri?.status);
                        setLoading(false);
                    });
                }
            }}
        >
            {getStatus === MriStatus.Validated ? 'Envoyer' : 'Valider'}
        </Button>
    );
}
