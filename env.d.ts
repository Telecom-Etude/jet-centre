declare namespace NodeJS {
    interface ProcessEnv {
        AUTH_SECRET: string;
        AUTH_GOOGLE_ID: string;
        AUTH_GOOGLE_SECRET: string;
        DB_URL: string;
        DOSSIER_SUIVI: string;
        DEV_MODE?: bool;
    }
}
