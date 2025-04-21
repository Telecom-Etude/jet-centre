import { X } from 'lucide-react';

import { Button } from './ui/button';

export const DeletableItem = ({ deleteItem, item }: { item: string; deleteItem: () => void }) => (
    <div className="flex items-center px-2 space-x-2 rounded-full bg-slate-950">
        <p>{item}</p>
        <Button
            onClick={() => deleteItem()}
            variant="ghost"
            className="px-0 py-0 hover:bg-transparent"
        >
            <X />
        </Button>
    </div>
);

export const DeletableItemList = ({
    items,
    deleteItem,
}: {
    items: string[];
    deleteItem: (item: string) => void;
}) => (
    <div className="flex flex-wrap space-x-2 py-4">
        {items.map((item: string, i) => (
            <div key={i} className="flex items-center px-2 space-x-2 rounded-full bg-slate-950">
                <p>{item}</p>
                <Button
                    onClick={() => deleteItem(item)}
                    variant="ghost"
                    className="px-0 py-0 hover:bg-transparent"
                >
                    <X />
                </Button>
            </div>
        ))}
    </div>
);

export function addRemoveKey(key: string, getList: string[], setList: (x: string[]) => void) {
    if (getList.includes(key)) {
        setList(getList.filter((a) => a !== key));
    } else {
        setList([...getList, key]);
    }
}
