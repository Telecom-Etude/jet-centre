declare namespace NodeJS {
    interface ProcessEnv {
        /// Auth
        AUTH_SECRET: string;
        AUTH_GOOGLE_ID: string;
        AUTH_GOOGLE_SECRET: string;
        AUTH_TRUST_HOST?: string;
        /// Google Ids
        DOSSIER_SUIVI: string;
        TEMPLATE_EXCEL_CE: string;
        TEMPLATE_EXCEL_RM: string;
        TEMPLATE_ACC: string;
        TEMPLATE_ACE: string;
        TEMPLATE_ARM: string;
        TEMPLATE_BC: string;
        TEMPLATE_BCR: string;
        TEMPLATE_BA: string;
        TEMPLATE_CC: string;
        TEMPLATE_CE: string;
        TEMPLATE_PVRF: string;
        TEMPLATE_PVRI: string;
        TEMPLATE_RM: string;
        /// Seed
        ADMIN_EMAIL: string;
        ADMIN_POSITION?: string;
        ENV: 'prod' | 'dev';
        /// Others
        WEBSITE_URL: string;
        DB_URL: string;
        NO_CACHE?: string;
        REDIS_URL: string;
        DEV_MODE?: true;
    }
}
