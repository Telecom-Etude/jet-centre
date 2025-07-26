export type SubscribePersonReturn =
    | { status: Exclude<SubscribePersonStatus, SubscribePersonStatus.WrongEmail> }
    | { status: SubscribePersonStatus.WrongEmail; email: string; id: string };

export enum SubscribePersonStatus {
    FindPersonFailure,
    SubscribeNewPersonFailure,
    WrongEmail,
    SubscribeNewAssigneeFailure,
    SubscribeExistingFailure,
    Ok,
}
