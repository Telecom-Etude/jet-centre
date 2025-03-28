import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { copyTemplateWithExcel } from '@/drive/files';
import { TEMPLATES } from '@/drive/template';
import { reloadWindow } from './file-explorer';

export function TemplateCloningDialog({
    open,
    setOpen,
    setLoading,
    study,
}: {
    study: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    setLoading: (loading: boolean) => void;
}) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Cloner un template</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    {TEMPLATES.map(({ file, excel }, i) => (
                        <Button
                            variant="outline"
                            key={i}
                            onClick={() => {
                                setOpen(false);
                                setLoading(true);
                                copyTemplateWithExcel(file, study, excel).then(() => {
                                    setOpen(false);
                                    reloadWindow();
                                });
                            }}
                        >
                            {file.name}
                        </Button>
                    ))}
                </div>
                <DialogClose>Annuler</DialogClose>
            </DialogContent>
        </Dialog>
    );
}
