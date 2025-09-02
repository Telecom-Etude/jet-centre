'use client';

import { MriStatus } from '@prisma/client';
import { useState } from 'react';
import { FaBug, FaCheck } from 'react-icons/fa6';

import { sendMRI } from '@/actions/mri/send';
import { MriValidationStatus, validateMri } from '@/actions/mri/types';
import { LoadingFullStops } from '@/components/loading';
import { Button } from '@/components/ui/button';

import { setMriStatus } from '../../cdp/[study]/mri/form/mri';

import { MriToValidate } from './actions';

function checkAndSendMri(mri: MriToValidate, setError: () => void, setSuccess: () => void) {
    const mriParsingResult = validateMri(mri);
    switch (mriParsingResult.status) {
        case MriValidationStatus.Ok: {
            sendMRI(mriParsingResult.validatedMri).then((res) => {
                if (!res) return setError();
                setMriStatus(mri.id, MriStatus.Sent).then((mri) => {
                    if (mri?.status == MriStatus.Sent) setSuccess();
                    else setError();
                });
            });
            break;
        }

        case MriValidationStatus.MissingField: {
            setMriStatus(mri.id, MriStatus.InProgress);
            setError();
            window.alert(`Le champ '${mriParsingResult.field}' est manquant sur ce MRI`);
            break;
        }

        case MriValidationStatus.UnvalidatedMri: {
            setError();
            window.alert(`Ce MRI n'a pas encore été validé.`);
            break;
        }

        case MriValidationStatus.MissingCdpEmail: {
            setError();
            window.alert(
                `${mriParsingResult.name} ne s'est jamais connecté à l'outil donc des informations sont manquantes...`
            );
            break;
        }
    }
}

export function ValidationButton({ mri }: { mri: MriToValidate }) {
    const [getStatus, setStatus] = useState<MriStatus | undefined>(mri.status);
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
                    checkAndSendMri(
                        mri,
                        () => {
                            setLoading(false);
                            setStatus(undefined);
                        },
                        () => {
                            setLoading(false);
                            setStatus(MriStatus.Sent);
                        }
                    );
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
