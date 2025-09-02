'use client';

import { MriStatus } from '@prisma/client';
import { useState } from 'react';
import { FaBug, FaCheck } from 'react-icons/fa6';

import { sendMRI } from '@/actions/mailchimp/mri';
import { LoadingFullStops } from '@/components/loading';
import { Button } from '@/components/ui/button';

import { setMriStatus } from '../../cdp/[study]/mri/form/mri';

import { MriToValidate } from './actions';

export function ValidationButton({ mri }: { mri: MriToValidate }) {
    const [getStatus, setStatus] = useState<MriStatus | undefined>(mri.status);
    const [loading, setLoading] = useState(false);

    const setError = () => {
        setLoading(false);
        setStatus(undefined);
    };

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
                    sendMRI(mri).then((res) => {
                        if (!res) return setError();
                        setMriStatus(mri.id, MriStatus.Sent).then((mri) => {
                            setStatus(mri?.status);
                            setLoading(false);
                        });
                    });
                } else {
                    setMriStatus(mri.id, MriStatus.Validated).then((mri) => {
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
