import Image from 'next/image';

import logoBird from '@/../public/bird.svg';

export const LogoBird = () => {
    return <Image priority src={logoBird} alt="Logo Telecom Etude" className="size-12" />;
};
