import { Box, BoxHeader, BoxHeaderBlock, BoxTitle, BoxDragHandle } from '@/components/boxes/boxes';
import { DragHandle } from '@/components/meta-components/sortableList';
import { Switch } from '@/components/ui/switch';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn, NBSP } from '@/lib/utils';

import { ContactFormValue } from './companiesSchema';

type ContactItemProps = {
    dragHandleProps: DragHandle;
    updateContact: (newContact: ContactFormValue) => void;
} & ContactFormValue;

export function SimpleContactItem({
    dragHandleProps,
    updateContact,
    ...contact
}: ContactItemProps) {
    return (
        <Box className={cn('w-full', contact.excluded && 'opacity-30')}>
            <BoxHeader className="pr-1">
                <BoxHeaderBlock className="grow overflow-hidden grid grid-cols-5">
                    <BoxTitle className="col-span-2">
                        {contact.firstName + NBSP + contact.lastName}
                    </BoxTitle>
                    <span>{contact.job}</span>
                    <span className="col-span-2 italic overflow-hidden text-ellipsis">
                        {contact.email}
                    </span>
                </BoxHeaderBlock>
                <BoxHeaderBlock>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="flex flex-col justify-center h-full">
                                    <Switch
                                        checked={!contact.excluded}
                                        onClick={() => {
                                            updateContact({
                                                ...contact,
                                                excluded: !contact.excluded,
                                            });
                                        }}
                                    />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>Inclure pour l&apos;étude</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <BoxDragHandle {...dragHandleProps} />
                </BoxHeaderBlock>
            </BoxHeader>
        </Box>
    );
}
