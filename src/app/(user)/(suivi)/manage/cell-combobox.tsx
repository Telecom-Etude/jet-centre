import { ManyComboBox, SingleCombobox } from '@/components/meta-components/combobox';
import { useState } from 'react';

type CellComboBoxProps = {
    data: any;
    items: string[];
    placeholder: string;
    codeToID: { [key: string]: string };
};

export function CellManyComboBox({ data, items, placeholder, codeToID }: CellComboBoxProps) {
    const [keysAndTitle, setKeysAndTitle] = useState<[string[], string]>([
        Array.isArray(data) && data.every((item) => typeof item === 'string') ? data : [data],
        Array.isArray(data) && data.every((item) => typeof item === 'string')
            ? data.join(', ')
            : data,
    ]);

    const keys = keysAndTitle[0].slice(0);

    function addRemoveKey(key: string) {
        const index = keys.indexOf(key, 0);
        if (index > -1) {
            keys.splice(index, 1);
            setKeysAndTitle([keys, keys.join(', ')]);
        } else {
            keys.push(key);
            setKeysAndTitle([keys, keys.join(', ')]);
        }
        console.log(codeToID);
    }

    return (
        <ManyComboBox
            selectedKeys={keysAndTitle[0]}
            addRemoveKey={addRemoveKey}
            items={items}
            title={keysAndTitle[1]}
            emptyMessage="Aucune entrée ne correspond"
            placeholder={placeholder}
        />
    );
}

export function CellSingleComboBox({ data, items, placeholder, codeToID }: CellComboBoxProps) {
    const [currentKey, setCurrentKey] = useState<string | null>(data);

    const singleKey = currentKey;
    console.log(singleKey);

    function selectKey(key: string) {
        setCurrentKey(key);
        console.log(codeToID);
    }

    return (
        <SingleCombobox
            items={items}
            emptyMessage="Aucune entrée ne correspond"
            currentKey={currentKey}
            title={currentKey ? currentKey : ''}
            selectKey={selectKey}
            placeholder={placeholder}
        />
    );
}
