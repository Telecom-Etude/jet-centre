import Image from 'next/image';
import BirdLogo from '@/../public/bird_color.svg';
import { SignOut } from '@/app/(public)/auth/google';
import { AuthLayout } from '../auth_layout';

export default async function SignInPage() {
    return (
        <div className="overflow-hidden p-10 flex flex-col-reverse h-dvh relative md:flex-row-reverse md:justify-around md:items-center">
            <Image
                src={BirdLogo}
                alt="logo telecom etude"
                className="hidden md:block max-w-[30%] max-h-[50%]"
            />
            <AuthLayout title="Déconnexion" button={<SignOut />} />
        </div>
    );
}
