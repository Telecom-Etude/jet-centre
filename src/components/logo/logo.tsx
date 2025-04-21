import Image from 'next/image';

import logoBird from '@/../public/bird.svg';
import logoBirdText from '@/../public/bird_text.svg';

export const LogoBird = () => {
    return <Image priority src={logoBird} alt="Logo Telecom Etude" className="size-12" />;
};

export const LogoBirdText = () => {
    return <Image priority src={logoBirdText} alt="Logo Telecom Etude" className="size-24" />;
};
