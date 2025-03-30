export function reloadWindow() {
    if (typeof window != 'undefined') location.reload();
}

export interface FileExplorerDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    study: string;
}
