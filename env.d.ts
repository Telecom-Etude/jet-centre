declare namespace NodeJS {
    interface ProcessEnv {
        /// Auth
        AUTH_SECRET: string;
        AUTH_GOOGLE_ID: string;
        AUTH_GOOGLE_SECRET: string;
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
        /// Others
        ADMIN_EMAIL: string;
        WEBSITE_URL: string;
        DB_URL: string;
        DEV_MODE?: '';
    }
}
