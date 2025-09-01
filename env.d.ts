/**
 * Environment variables needed by auth.js
 */
interface AuthEnv {
    /**
     * Secret used for signing authentication tokens.
     * @see https://authjs.dev/getting-started/security#secret
     */
    AUTH_SECRET: string;
    /**
     * Google OAuth client ID.
     * @see https://console.cloud.google.com/apis/credentials
     */
    AUTH_GOOGLE_ID: string;
    /**
     * Google OAuth client secret.
     * @see https://console.cloud.google.com/apis/credentials
     */
    AUTH_GOOGLE_SECRET: string;
    /**
     * Needed if you want to use a production build on localhost.
     * Contains the URL, e.g. `http://localhost:5005`.
     * @see https://authjs.dev/reference/core/types#trusthost
     */
    AUTH_TRUST_HOST?: string;
}

/**
 * Environment variables needed for Google Drive integration
 */
interface GoogleDriveEnv {
    /**
     * Google Drive folder ID for the "Dossier de suivi".
     */
    DOSSIER_SUIVI: string;
    /**
     * All the following are the Google ids to the templates
     * */
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
}

/**
 * Environment variables needed for Google Drive integration
 */
interface SeedEnv {
    /**
     * Email address of the initial admin user.
     * */
    ADMIN_EMAIL: string;
    /**
     * Position of the initial admin user. Defaults to 'Info'. The position determines the rights you will have access to when first signing in
     */
    ADMIN_POSITION?: string;
    /**
     * Deployment environment: "prod" or "dev". This influences how the seed is performed.
     */
    ENV: 'prod' | 'dev';
    /**
     * If true, disables DB initialisation logic on seed.
     * Otherwise, the DB is filled with lots of data.
     * */
    NO_DB_INIT?: true;
}

interface OtherEnv {
    WEBSITE_URL: string;
    /**
     * @see ./docs/database.md
     */
    DB_URL: string;
    /**
     * Disables REDIS
     * */
    NO_CACHE?: string;
    /**
     * Redis connection URI.
     * @see https://redis.io/docs/latest/operate/configuration/cli/connection-strings/
     */
    REDIS_URL: string;
    /**
     * Gives unconditional access to all data and pages.
     * This breaks middleware logic.
     */
    DEV_MODE?: true;
    /**
     * API key for mailchimp. You can create one here: @link <https://us22.admin.mailchimp.com/account/api/manage/#create.
     */
    MAILCHIMP_API_KEY: string;
    /**
     * Mailchimp server prefix associated with the mailchimp account.
     *
     * This prefix is the first subdomain of the mailchimp interface. Thus, to get this prefix, connect to your account on mailchimp.com, then you should be redirected to <prefix>.admin.mailchimp.com. Put the prefix in this variable
     */
    MAILCHIMP_SERVER_PREFIX: string;
}

declare namespace NodeJS {
    interface ProcessEnv extends AuthEnv, GoogleDriveEnv, SeedEnv, OtherEnv {}
}
