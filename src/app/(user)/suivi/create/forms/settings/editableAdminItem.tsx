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

import { AdminForm } from './adminForm';
import { NewAdmin } from './settingsSchema';

export type AdminItemProps = {
    dragHandleProps: DragHandle;
    updateAdmin: (newAdmin: NewAdmin) => void;
    deleteAdmin: () => void;
} & NewAdmin;

export function EditableAdminItem({
    dragHandleProps,
    updateAdmin,
    deleteAdmin,
    ...admin
}: AdminItemProps) {
    const [collapse, setCollapse] = useState(true);
    const toggleCollapse = () => setCollapse(!collapse);

    return (
        <Box className={'w-full'}>
            <BoxHeader className="pr-1">
                <BoxHeaderBlock className="grow overflow-hidden grid grid-cols-4">
                    <BoxTitle className="col-span-2">
                        {admin.firstName + NBSP + admin.lastName}
                    </BoxTitle>
                    <span className="col-span-2 italic overflow-hidden text-ellipsis">
                        {admin.email}
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
                    <BoxButtonTrash onClick={deleteAdmin} />

                    <BoxDragHandle {...dragHandleProps} />
                </BoxHeaderBlock>
            </BoxHeader>
            <BoxCollapser collapse={collapse}>
                <BoxContent>
                    <AdminForm
                        defaultValues={admin}
                        onSubmit={(admin) => {
                            toggleCollapse();
                            updateAdmin(admin);
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
