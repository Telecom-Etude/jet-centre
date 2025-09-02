import { Level } from '@prisma/client';
import { StaticImageData } from 'next/image';

import Cyber from '@/../public/mri/domains/cyber.png';
import Data from '@/../public/mri/domains/data.png';
import Dev from '@/../public/mri/domains/dev.png';
import Ima from '@/../public/mri/domains/ima.png';
import Market from '@/../public/mri/domains/market.png';
import Networks from '@/../public/mri/domains/reseaux.png';
import Se from '@/../public/mri/domains/se.png';

export interface DoubleImage {
    next: StaticImageData;
    mailchimp: string;
}

export const DOMAIN_IMAGES: { [key: string]: DoubleImage } = {
    data: {
        next: Data,
        mailchimp:
            'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/3f084638-6053-45c6-a99e-7ad481f340fc.png',
    },
    dev: {
        next: Dev,
        mailchimp:
            'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/458e3a19-7fe7-4471-aad4-8d19e43f2383.png',
    },
    cyber: {
        next: Cyber,
        mailchimp:
            'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/4d65cc38-f99c-4eb5-bd8b-f4c58d44aecb.png',
    },
    se: {
        next: Se,
        mailchimp:
            'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/ad81493a-5281-4772-adef-4bcebee00243.png',
    },
    ima: {
        next: Ima,
        mailchimp:
            'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/863635c4-6fc0-42d0-add6-7c4b8aa04b9b.png',
    },
    market: {
        next: Market,
        mailchimp:
            'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/0104e278-2e89-44d0-823f-86e2e92a1e70.png',
    },
    networks: {
        next: Networks,
        mailchimp:
            'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/14507c52-c18e-338a-1272-4d4e76b83571.png',
    },
} as const;

export const DIFFICULTY_IMAGES: Record<Level, string> = {
    Low: 'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/aa0aa2c2-9aaf-46f8-ae91-8c28953b02bc.png',
    Medium: 'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/d790eeff-772d-4aa7-91a0-f1883414b675.png',
    High: 'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/7781ba0c-a348-4722-ba77-beee6bbb5f51.png',
};

export const PAYCHECK_LEVEL_IMAGES: Record<Level, string> = {
    Low: 'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/aa0aa2c2-9aaf-46f8-ae91-8c28953b02bc.png',
    Medium: 'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/d790eeff-772d-4aa7-91a0-f1883414b675.png',
    High: 'https://mcusercontent.com/d64b9431d63c83512b8b612ee/images/7781ba0c-a348-4722-ba77-beee6bbb5f51.png',
};
