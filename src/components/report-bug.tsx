'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { useViewer } from './hooks/use-viewer';
import { registerBug } from '@/data/bug';
import { useUserLogs } from './hooks/use-user-logs';

const formSchema = z.object({
    description: z.string().min(10, {
        message: 'Merci de nous donner fournir plus de détails',
    }),
});

export function ReportBug() {
    const [open, setOpen] = useState(false);
    const viewerResult = useViewer();
    const { logs } = useUserLogs();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (viewerResult.status == 'success') {
            await registerBug(viewerResult.viewer, JSON.stringify(logs), values.description);
            setOpen(false);
        } else {
            await registerBug(null, JSON.stringify(logs), values.description);
            form.setError('description', {
                message:
                    "Une erreur est survenue avec votre login. Le rapport a été soumis mais nous vous suggérons de vous déconnecter et reconnecter afin de réessayer l'action qui a amené le bug.",
            });
        }
    }

    return (
        <Dialog open={open} onOpenChange={(v) => setOpen(v)}>
            <DialogTrigger className="fixed bottom-8 right-8" asChild>
                <Button variant="destructive">Ticket</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>Rapport de bug</DialogTitle>
                            <DialogDescription>
                                Nous avons enregistré votre activité sur jet-centre localement. En
                                soumettant ce rapport de bug vous consentez à ce que nous examinions
                                ces logs.
                            </DialogDescription>
                        </DialogHeader>
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="J'ai fait ça et il s'est passé ça..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="pt-4">
                            <Button type="submit" variant="secondary">
                                Envoyer le rapport
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
