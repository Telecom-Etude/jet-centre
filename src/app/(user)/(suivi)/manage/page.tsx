import prisma from '@/db';
import { columns } from './columns';
import { DataTable } from './data-table';

const rawAdmins = await prisma.admin.findMany({
    select: {
        user: { select: { person: { select: { firstName: true, lastName: true } } } },
    },
});
const admins = rawAdmins.map(
    (admin) => admin.user.person.firstName + ' ' + admin.user.person.lastName
);

const rawClients = await prisma.client.findMany({
    select: { person: { select: { firstName: true, lastName: true, email: true } } },
});
const clientNames = rawClients.map(
    (client) => client.person.firstName + ' ' + client.person.lastName
);
const clientEmails = rawClients.map((client) => client.person.email);

export default async function TableauSuivi() {
    const studies = await prisma.study.findMany({
        select: {
            id: true,
            cdps: {
                select: {
                    user: { select: { person: { select: { firstName: true, lastName: true } } } },
                },
            },
            auditors: {
                select: {
                    user: { select: { person: { select: { firstName: true, lastName: true } } } },
                },
            },
            information: { select: { code: true, title: true, description: true, domain: true } },
            progress: {
                select: {
                    phases: {
                        select: {
                            jehs: true,
                            deliverable: true,
                            unitPrice: true,
                            startDate: true,
                            endDate: true,
                        },
                    },
                    step: true,
                },
            },
            clients: {
                select: {
                    client: {
                        select: {
                            person: { select: { firstName: true, lastName: true, email: true } },
                        },
                    },
                },
            },
            satisfaction: { select: { publish: true } },
        },
    });
    const studiesProps = studies.map((study) => ({
        id: study.id,
        code: study.information.code,
        step: study.progress?.step ?? null,
        next_deadline: 'Pas défini',
        cdps: study.cdps.map((cdp) => cdp.user.person.firstName + ' ' + cdp.user.person.lastName),
        senior_cdps: study.cdps.map(
            (cdp) => cdp.user.person.firstName + ' ' + cdp.user.person.lastName
        ),
        refs: study.auditors.map(
            (auditor) => auditor.user.person.lastName + ' ' + auditor.user.person.firstName
        ),
        title: study.information.title,
        type_study: study.information.domain.map((domain) => domain + '\n').toString(),
        date_pre_study: 'Pas défini',
        oc: "Pas d'OC",
        last_check: 'Pas défini',
        next_check: 'Pas défini',
        info: study.information.description,
        signature_date: 'Pas défini',
        gap: 'Pas défini',
        nb_phases: study.progress
            ? study.progress.phases.length
            : "Il n'y a pas de phases définies",
        current_phase_ending: 'Pas défini',
        end_rm: 'Pas défini',
        end_ce: 'Pas défini',
        av_number: 'Pas défini',
        last_av_end: 'Pas défini',
        pvrf: 'Pas défini',
        gape_signature_pvrf: 'Pas défini',
        total_duration: 'Pas défini',
        client_name: study.clients.map((client) => ({
            name: client.client.person.firstName + ' ' + client.client.person.lastName,
        })),
        client_email: study.clients.map((client) => ({ email: client.client.person.email })),
        cconf: 'Non',
        qs: study.satisfaction
            ? study.satisfaction.publish
                ? 'Envoyé'
                : 'Non envoyé'
            : 'Non concerné',
        status: 'Pas défini',
        domain: 'Pas défini',
        jeh_price: 'Pas défini',
        jeh_number: 'Pas défini',
        jeh_price_number: 'Pas défini',
        ca_etude_ht: 'Pas défini',
        percent_ca: 'Pas défini',
        client_type: 'Pas défini',
        sector: 'Pas défini',
        drop_reasons: 'Pas défini',
    }));

    const codeToID: { [key: string]: string } = {};
    for (const study of studiesProps) {
        codeToID[study.code] = study.id;
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable
                columns={columns}
                data={studiesProps}
                admins={admins}
                clientNames={clientNames}
                clientEmails={clientEmails}
                codeToID={codeToID}
            />
        </div>
    );
}
