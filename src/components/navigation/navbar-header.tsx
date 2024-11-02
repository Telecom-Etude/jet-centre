import { LogoBird } from '../logo';

export const NavbarHeader = () => {
    return (
        <div className="flex items-center gap-3 px-2">
            <LogoBird />
            <div className="flex flex-col">
                <h1 className="font-semibold text-lg">JET CENTER</h1>
                <p className="text-sm text-muted-foreground">Telecom Etude</p>
            </div>
        </div>
    );
};
