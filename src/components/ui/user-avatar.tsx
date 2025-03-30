import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export const UserAvatar = ({ round, avatarUrl }: { round?: boolean; avatarUrl: string | null }) => {
    return (
        <Avatar className={cn('h-8 w-8 rounded-lg', round ? 'rounded-full' : '')}>
            <AvatarImage src={avatarUrl === null ? '/bird.svg' : avatarUrl} alt="User avatar" />
            <AvatarFallback className={cn('rounded-lg', round ? 'rounded-full' : '')}>
                A
            </AvatarFallback>
        </Avatar>
    );
};
