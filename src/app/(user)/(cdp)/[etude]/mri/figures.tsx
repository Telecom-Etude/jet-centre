import Data from '@/../public/mri/domains/data.png';
import Dev from '@/../public/mri/domains/dev.png';
import Cyber from '@/../public/mri/domains/cyber.png';
import Se from '@/../public/mri/domains/se.png';
import Reseaux from '@/../public/mri/domains/reseaux.png';
import Ima from '@/../public/mri/domains/ima.png';
import Market from '@/../public/mri/domains/market.png';

import PayLow from '@/../public/mri/pay/low.png';
import PayMedium from '@/../public/mri/pay/medium.png';
import PayHigh from '@/../public/mri/pay/high.png';

import DifficultyEasy from '@/../public/mri/difficulties/easy.png';
import DifficultyMedium from '@/../public/mri/difficulties/medium.png';
import DifficultyHard from '@/../public/mri/difficulties/hard.png';

import { Pays, Difficulties } from './form/schema';
import { Domain } from '@/settings/vars';
import Image, { StaticImageData } from 'next/image';

export function ImageElt({
    value,
    label,
    image
}: {
    value: string;
    label: string;
    image: StaticImageData;
}) {
    return (
        <figure className="text-center">
            <Image src={image} alt={'Image de ' + value} />
            <figcaption className="text-center text-sm mt-2 mb-[-5px]">{label}</figcaption>
            <p className="text-center font-bold text-mri-headers m-0">{value}</p>
        </figure>
    );
}

export function getDomain(domain: Domain) {
    let image = Data;

    switch (domain) {
        case 'Data Science':
            image = Data;
            break;
        case 'Machine Learning':
            image = Data;
            break;
        case 'Intelligence Artificielle':
            image = Data;
            break;
        case 'Développement Web':
            image = Dev;
            break;
        case 'Développement Mobile':
            image = Dev;
            break;
        case 'Développement logiciel':
            image = Dev;
            break;
        case 'Cybersécurité':
            image = Cyber;
            break;
        case 'Cryptographie':
            image = Cyber;
            break;
        case 'Systèmes embarqués':
            image = Se;
            break;
        case 'Internet des objets':
            image = Se;
            break;
        case 'Réseaux':
            image = Reseaux;
            break;
        case 'Télécommunications':
            image = Reseaux;
            break;
        case 'Internet':
            image = Reseaux;
            break;
        case 'Image':
            image = Ima;
            break;
        case 'Computer Graphics':
            image = Ima;
            break;
        case '3D':
            image = Ima;
            break;
        case 'Étude de marché':
            image = Market;
            break;
        case "État de l'art":
            image = Market;
            break;
    }

    return { label: 'DOMAIN', value: domain, image: image };
}
export function getPay(pay_under: number, pay_over: number, pay_level: Pays) {
    let image = PayLow;

    switch (pay_level) {
        case 'Faible':
            image = PayLow;
            break;
        case 'Moyenne':
            image = PayMedium;
            break;
        case 'Élevée':
            image = PayHigh;
            break;
    }

    return {
        label: 'RÉMUNÉRATION',
        value: `${pay_under}€ - ${pay_over}€`,
        image: image
    };
}
export function getDifficulty(difficulty: Difficulties) {
    let image = DifficultyEasy;

    switch (difficulty) {
        case 'Faible':
            image = DifficultyEasy;
            break;
        case 'Moyenne':
            image = DifficultyMedium;
            break;
        case 'Élevée':
            image = DifficultyHard;
            break;
    }

    return {
        label: 'DIFFICULTÉ',
        value: difficulty,
        image: image
    };
}
