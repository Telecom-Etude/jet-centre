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
import { FileExplorerDialogProps, reloadWindow } from './utils';

interface TemplateCopyDialog extends FileExplorerDialogProps {
    setLoading: (loading: boolean) => void;
}

export function TemplateCopyDialog({ open, setOpen, setLoading, study }: TemplateCopyDialog) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Nouveau fichier</DialogTitle>
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
