import { ManyComboBox, SingleCombobox } from '@/components/meta-components/combobox';
import { useState } from 'react';
import { updateDatabase } from './actions';

type CellComboBoxProps = {
    data: any;
    items: string[];
    placeholder: string;
    id: string;
    type: string;
};

export function CellManyComboBox({ data, items, placeholder, id, type }: CellComboBoxProps) {
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
        updateDatabase(keys, type, id);
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

export function CellSingleComboBox({ data, items, placeholder, id, type }: CellComboBoxProps) {
    const [currentKey, setCurrentKey] = useState<string | null>(data);

    const singleKey = currentKey;
    console.log(singleKey);

    function selectKey(key: string) {
        setCurrentKey(key);
        updateDatabase(key, type, id);
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
