'use server';

import db from '@/db';

import { MriSubscriptionType } from './schema';
import { FoundPerson, SubscribePersonReturn, SubscribePersonStatus } from './types';

async function findPerson({
    firstName,
    lastName,
}: MriSubscriptionType): Promise<FoundPerson | null | undefined> {
    try {
        const person = await db.person.findUnique({
            where: { name: { firstName, lastName } },
            select: {
                id: true,
                email: true,
                assignee: { select: { id: true, mriReceiver: true } },
            },
        });
        return person;
    } catch (e) {
        console.error(`[findPerson] ${e}`);
    }
}

async function subscribeNewPerson({ firstName, lastName, email }: MriSubscriptionType) {
    try {
        return db.mriReceiver.create({
            data: {
                assignee: {
                    create: {
                        person: { create: { email, lastName, firstName } },
                    },
                },
            },
        });
    } catch (e) {
        console.error(`[subscribeNewPerson] ${e}`);
    }
}

async function subscribeNewAssignee(id: string) {
    try {
        return db.mriReceiver.create({
            data: {
                assignee: {
                    create: {
                        person: { connect: { id } },
                    },
                },
            },
        });
    } catch (e) {
        console.error(`[subscribeNewAssignee] ${e}`);
    }
}

async function subscribeExisting(id: string) {
    try {
        return db.mriReceiver.create({
            data: {
                assignee: {
                    connect: { id },
                },
            },
        });
    } catch (e) {
        console.error(`[subscribeNewExisting] ${e}`);
    }
}

const OK: SubscribePersonReturn = { status: SubscribePersonStatus.Ok };

export async function subscribePerson(
    values: MriSubscriptionType,
    previousPersonId?: string,
    previousAssigneeId?: string
): Promise<SubscribePersonReturn> {
    let personId;
    let assigneeId;

    if (previousPersonId === undefined) {
        const person = await findPerson(values);

        if (person === undefined)
            return { status: SubscribePersonStatus.FindPersonFailure } as const;

        if (person === null) {
            const mriReceiver = await subscribeNewPerson(values);
            if (mriReceiver === undefined)
                return { status: SubscribePersonStatus.SubscribeNewPersonFailure };
            return OK;
        }

        if (person.email && person.email !== values.email)
            return {
                status: SubscribePersonStatus.WrongEmail,
                person,
            };

        personId = person.id;
        assigneeId = person.assignee?.id;
    } else {
        personId = previousPersonId;
        assigneeId = previousAssigneeId;
    }

    if (assigneeId === undefined) {
        const mriReceiver = await subscribeNewAssignee(personId);
        if (mriReceiver === undefined)
            return {
                status: SubscribePersonStatus.SubscribeNewAssigneeFailure,
            };
        return OK;
    }

    const mriReceiver = subscribeExisting(assigneeId);
    if (mriReceiver === undefined)
        return { status: SubscribePersonStatus.SubscribeExistingFailure };
    return OK;
}
