import { Button } from '@/components/ui/button';
import Image from 'next/image';
import LogoGoogle from '@/../public/google.svg';

/**
 * Button to log in and out using the Google provider
 *
 * @export
 * @param {{ text: string; action: any }}
 *      - text: text of the button
 *      - action: action executed when the button is clicked.
 */
export function GoogleButton({ text, action }: { text: string; action: () => Promise<void> }) {
    return (
        <form action={action}>
            <Button
                type="submit"
                className="py-28 bg-white hover:bg-neutral-300 rounded-xl p-8 w-full flex space-x-2 flex-row justify-center items-center"
                variant="default"
            >
                <Image
                    src={LogoGoogle}
                    alt="Google Logo"
                    width={24}
                    height={24}
                    className="h-12 w-12 "
                />
                <span className="text-black">{text}</span>
            </Button>
        </form>
    );
}
