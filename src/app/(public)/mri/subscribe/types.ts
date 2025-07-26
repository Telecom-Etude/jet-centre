export interface FoundPerson {
    id: string;
    email: string | null;
    assignee: { id: string; mriReceiver: { assigneeId: string } | null } | null;
}

export type SubscribePersonReturn =
    | { status: Exclude<SubscribePersonStatus, SubscribePersonStatus.WrongEmail> }
    | { status: SubscribePersonStatus.WrongEmail; person: FoundPerson };

export enum SubscribePersonStatus {
    FindPersonFailure,
    SubscribeNewPersonFailure,
    WrongEmail,
    SubscribeNewAssigneeFailure,
    SubscribeExistingFailure,
    Ok,
}
