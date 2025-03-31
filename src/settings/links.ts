export const LINKEDIN_URL = 'https://www.linkedin.com/company/telecom-etude';
export const FACEBOOK_URL = 'https://www.facebook.com/TelecomEtude';
export const INSTAGRAM_URL = 'https://www.instagram.com/telecometude';
export const TWITTER_URL = 'https://x.com/TelecomEtude';
export const SHOWCASE_WEBSITE_URL = 'https://telecom-etude.fr';
export const CONTACT_EMAIL = 'contact@telecom-etude.fr';

export function applyUrl(code: string): string {
    return `${process.env.WEBSITE_URL}/postuler/${code}`;
}
