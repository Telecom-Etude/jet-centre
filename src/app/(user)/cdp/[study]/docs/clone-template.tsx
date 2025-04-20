import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { copyTemplate } from '@/drive/files';
import { TEMPLATE_NAMES } from '@/drive/template';
import { FileExplorerDialogProps } from './utils';
import { reloadWindow } from '@/lib/utils';

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
                    {TEMPLATE_NAMES.map((template, i) => (
                        <Button
                            variant="outline"
                            key={i}
                            onClick={() => {
                                setOpen(false);
                                setLoading(true);
                                copyTemplate(study, template).then(() => {
                                    setOpen(false);
                                    reloadWindow();
                                });
                            }}
                        >
                            {template}
                        </Button>
                    ))}
                </div>
                <DialogClose>Annuler</DialogClose>
            </DialogContent>
        </Dialog>
    );
}
