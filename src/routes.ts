const ERROR_PREFIX = '/error/';
const AUTH_PREFIX = '/auth/';

const ERRORS = {
    unauthorised: 'unauthorised',
    invalidPosition: 'invalid-position',
};

export const ROUTES = {
    loginRedirect: '/',
    /* Error routes */
    unauthorised: ERROR_PREFIX + ERRORS.unauthorised,
    invalidPosition: ERROR_PREFIX + ERRORS.invalidPosition,
    /* Auth routes */
    signIn: AUTH_PREFIX + 'signin',
    signOut: AUTH_PREFIX + 'signout',
} as const;

export type StudyParams = { params: Promise<{ study: string }> };

export interface ErrorDisplayInformation {
    title: string;
    text: string;
}

/**
 * Get the information to display on the error page for each of the middleware errors that can occur.
 *
 * This content will be display on the page at {ERROR_PREFIX}/{error}.
 * */
export function getErrorDisplayInformation(error: string): ErrorDisplayInformation {
    switch (error) {
        case ERRORS.unauthorised:
            return {
                title: "Vous n'êtes pas autotisés à accéder à cette page.",
                text: "Merci de contacter le pôle info s'il vous manque des permissions.",
            };
        case ERRORS.invalidPosition:
            return {
                title: 'Votre rôle dans la JE a été mal défini.',
                text: "Ceci n'est pas normal, merci de vous déconnecter/reconnecter. Si vous voyez toujours cette erreur, merci de contacter le pôle info au plus vite!",
            };
        default:
            return {
                title: 'Erreur inconnue',
                text: "Une erreur inconnue s'est produite. Contactez le pôle info!",
            };
    }
}
