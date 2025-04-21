import { useState } from 'react';
import { FaPen } from 'react-icons/fa';

import {
    Box,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
    BoxDragHandle,
    BoxCollapser,
    BoxContent,
    BoxButtonTrash,
} from '@/components/boxes/boxes';
import { DragHandle } from '@/components/meta-components/sortableList';
import { Button } from '@/components/ui/button';
import { NBSP } from '@/lib/utils';

import { NewContact } from './companiesSchema';
import { ContactForm } from './contactForm';

export type ContactItemProps = {
    dragHandleProps: DragHandle;
    updateContact: (newContact: NewContact) => void;
    deleteContact: () => void;
} & NewContact;

export function EditableContactItem({
    dragHandleProps,
    updateContact,
    deleteContact,
    ...contact
}: ContactItemProps) {
    const [collapse, setCollapse] = useState(true);
    const toggleCollapse = () => setCollapse(!collapse);

    return (
        <Box className={'w-full'}>
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
                    <Button
                        onClick={toggleCollapse}
                        variant="title"
                        className="p-[4.5px] h-6 w-6 bg-transparent hover:bg-transparent"
                    >
                        <FaPen className="h-full w-full" />
                    </Button>
                    <BoxButtonTrash onClick={deleteContact} />

                    <BoxDragHandle {...dragHandleProps} />
                </BoxHeaderBlock>
            </BoxHeader>
            <BoxCollapser collapse={collapse}>
                <BoxContent>
                    <ContactForm
                        defaultValues={contact}
                        onSubmit={(contact) => {
                            toggleCollapse();
                            updateContact(contact);
                        }}
                        onCancel={() => {
                            toggleCollapse();
                        }}
                    />
                </BoxContent>
            </BoxCollapser>
        </Box>
    );
}
