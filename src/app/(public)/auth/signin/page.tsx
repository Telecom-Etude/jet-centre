import Image from 'next/image';
import BirdLogo from '@/../public/bird_color.svg';
import { SignInWithGoogle } from '@/app/(public)/auth/google';
import { AuthLayout } from '../auth_layout';

export default async function SignInPage() {
    return (
        <div className="overflow-hidden p-10 flex flex-col h-dvh relative md:flex-row md:justify-around md:items-center">
            <Image
                src={BirdLogo}
                alt="logo telecom etude"
                className="hidden md:block max-w-[30%] max-h-[50%]"
            />
            <AuthLayout title="Connexion" button={<SignInWithGoogle />} />
        </div>
    );
}
