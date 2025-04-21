import { Domain, Level } from '@prisma/client';
import Image, { StaticImageData } from 'next/image';

import DifficultyEasy from '@/../public/mri/difficulties/easy.png';
import DifficultyHard from '@/../public/mri/difficulties/hard.png';
import DifficultyMedium from '@/../public/mri/difficulties/medium.png';
import PayHigh from '@/../public/mri/pay/high.png';
import PayLow from '@/../public/mri/pay/low.png';
import PayMedium from '@/../public/mri/pay/medium.png';

import { DOMAINS } from '@/db/types';

export function ImageElt({
    value,
    label,
    image,
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
    return { label: 'DOMAIN', value: DOMAINS[domain].display, image: DOMAINS[domain].image };
}

export function getPay(wageLowerBound: number, wageUpperBound: number, pay_level: Level) {
    const label = 'RÉMUNÉRATION';
    const value = `${wageLowerBound}€ - ${wageUpperBound}€`;

    switch (pay_level) {
        case 'Low':
            return { label, value, image: PayLow };
        case 'Medium':
            return { label, value, image: PayMedium };
        case 'High':
            return { label, value, image: PayHigh };
    }
}

export function getDifficulty(difficulty: Level) {
    const label = 'DIFFICULTÉ';

    switch (difficulty) {
        case 'Low':
            return { label, value: 'Facile', image: DifficultyEasy };
        case 'Medium':
            return { label, value: 'Moyenne', image: DifficultyMedium };
        case 'High':
            return { label, value: 'Hard', image: DifficultyHard };
    }
}
