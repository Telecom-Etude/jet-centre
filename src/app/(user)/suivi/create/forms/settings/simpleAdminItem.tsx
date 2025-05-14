import {
    Box,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
    BoxDragHandle,
    BoxButtonTrash,
} from '@/components/boxes/boxes';
import { DragHandle } from '@/components/meta-components/sortableList';
import { NBSP } from '@/lib/utils';

import { AdminFormValue } from './settingsSchema';

type AdminItemProps = {
    dragHandleProps: DragHandle;
    removeAdmin: () => void;
} & AdminFormValue;

export function SimpleAdminItem({ dragHandleProps, removeAdmin, ...admin }: AdminItemProps) {
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
                    <BoxButtonTrash onClick={removeAdmin} />

                    <BoxDragHandle {...dragHandleProps} />
                </BoxHeaderBlock>
            </BoxHeader>
        </Box>
    );
}
