'use client';

import { IoCloudUploadOutline } from 'react-icons/io5';

import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const className =
    'min-h-[300px] m-auto text-primary w-full max-w-[600px] flex items-center justify-center space-x-4 border-4 border-primary border-dashed';

export const DropableFormElts = () => (
    <>
        <Label
            htmlFor="cvSelector"
            className={cn(className, 'cursor-pointer')}
            onDrop={(e) => {
                e.preventDefault();
                (e.target as HTMLLabelElement).form?.requestSubmit();
            }}
            onDragOver={(e) => e.preventDefault()}
        >
            <h2>Déposez votre CV ici.</h2>
            <IoCloudUploadOutline />
        </Label>
        <input
            id="cvSelector"
            type="file"
            name="file"
            className="hidden"
            onChange={(e) => {
                e.preventDefault();
                e.target.form?.requestSubmit();
            }}
        />
    </>
);
