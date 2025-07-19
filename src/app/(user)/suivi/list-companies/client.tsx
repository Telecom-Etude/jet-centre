'use client';

import { useEffect, useState } from 'react';
import {
    Box,
    BoxButtonEdit,
    BoxContent,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';
import { CompanyName } from './types';
import { CompanyTable } from './data-table';
import { useRouter } from 'next/navigation';
import { FullCompany, getCompanyFromId } from './actions';
import { ErrorPage } from '@/components/error';
import { DisplayCompany } from './display-company';

function CompanyBoxContent({
    company,
    loadingState,
}: {
    company?: FullCompany;
    loadingState: LoadingState;
}) {
    switch (loadingState) {
        case LoadingState.NotSet:
            return (
                <ErrorPage title="Aucune entreprise sélectionnée">
                    <p>Sélectionnez une entreprise pour voir ses informations</p>
                </ErrorPage>
            );
        case LoadingState.Loading:
            return <ErrorPage title="Chargement en cours" />;
        case LoadingState.Error:
            return (
                <ErrorPage title="Erreur innattendue">
                    <p>Merci de faire un ticket SOS pour signaler cette erreur</p>
                    <p>Erreur lors de la récupération du client</p>
                </ErrorPage>
            );
        case LoadingState.Displayed:
            return company === undefined ? (
                <ErrorPage title="Erreur innattendue">
                    <p>Merci de faire un ticket SOS pour signaler cette erreur</p>
                    <p>Erreur lors de la récupération du client</p>
                </ErrorPage>
            ) : (
                <DisplayCompany company={company} />
            );
    }
}

enum LoadingState {
    NotSet,
    Loading,
    Displayed,
    Error,
}

export function ListCompanies({ data }: { data: CompanyName[] }) {
    const [selectedCompany, setSelectedCompany] = useState<string>();
    const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.NotSet);
    const [company, setCompany] = useState<FullCompany>();

    useEffect(() => {
        setLoadingState(LoadingState.NotSet);

        if (!selectedCompany) return setLoadingState(LoadingState.NotSet);

        setLoadingState(LoadingState.Loading);
        getCompanyFromId(selectedCompany).then((company) => {
            if (!company) return setLoadingState(LoadingState.Error);

            setCompany(company);
            setLoadingState(LoadingState.Displayed);
        });
    }, [selectedCompany]);

    const router = useRouter();
    return (
        <>
            <CompanyTable data={data} setSelectedCompany={setSelectedCompany} />
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>Informations sur l&apos;entreprise</BoxTitle>
                    <BoxHeaderBlock>
                        {company && (
                            <BoxButtonEdit
                                onClick={() => router.push('edit-company/' + selectedCompany)}
                                hoverContent="Edit company"
                            />
                        )}
                    </BoxHeaderBlock>
                </BoxHeader>
                <BoxContent>
                    <CompanyBoxContent company={company} loadingState={loadingState} />
                </BoxContent>
            </Box>
        </>
    );
}
