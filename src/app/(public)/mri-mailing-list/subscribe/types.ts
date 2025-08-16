export interface FoundPerson {
    id: string;
    email: string | null;
    assignee: { id: string; mriSubscriber: boolean } | null;
}

export type SubscribePersonReturn =
    | { status: Exclude<SubscribePersonStatus, SubscribePersonStatus.WrongEmail> }
    | { status: SubscribePersonStatus.WrongEmail; person: FoundPerson };

export enum SubscribePersonStatus {
    FindPersonFailure = 0,
    SubscribeNewPersonFailure = 1,
    WrongEmail = 2,
    SubscribeNewAssigneeFailure = 3,
    SubscribeExistingFailure = 4,
    UnknownFailure = 5,
    Ok = 6,
}
