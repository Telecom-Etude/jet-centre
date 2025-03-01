import { ReactNode, useState } from 'react';

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DraggableAttributes,
    DragEndEvent,
    DragStartEvent,
    UniqueIdentifier
} from '@dnd-kit/core';

import {
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';

import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { cn } from '@/lib/utils';

interface WithId {
    id: UniqueIdentifier;
}

export type DragHandle = (SyntheticListenerMap | undefined) & DraggableAttributes;

type RenderFn<T extends WithId = WithId> = (
    item: T,
    dragHandleProps: DragHandle,
    updateItem: (newItem: T) => void
) => ReactNode;

interface ItemManager<T extends WithId = WithId> {
    items: T[];
    moveItem(from: number, to: number): void;
    deleteItem: (id: string) => void;
    updateItem: (newItem: T, idx: number) => void;
    addItem: (item: T) => void;
    reset: () => void;
}

interface SortableProps<T extends WithId = WithId> extends ItemManager<T> {
    render: RenderFn<T>;
    className?: string;
}

export function SortableList<T extends WithId = WithId>({
    items,
    moveItem,
    updateItem,
    render,
    className
}: SortableProps<T>) {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

    function handleDragStart(event: DragStartEvent) {
        const { active } = event;

        setActiveId(active.id);
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over !== null && active.id !== over.id) {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);
            moveItem(oldIndex, newIndex);
        }

        setActiveId(null);
    }

    // TODO: implement a custom collision delection based on closest center and the mouse pointer
    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
        >
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                <div className={cn('flex flex-col gap-2 w-full', className)}>
                    {items.map((item, idx) => (
                        <SortableItem
                            key={item.id}
                            item={item}
                            render={render}
                            updateItem={(item) => updateItem(item, idx)}
                            active={item.id === activeId}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}

function SortableItem<T extends WithId = WithId>({
    item,
    active,
    updateItem,
    render
}: {
    item: T;
    active: boolean;
    updateItem: (newItem: T) => void;
    render: RenderFn<T>;
}) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: item.id
    });

    const style = {
        transform: transformToCSS(transform),
        transition
    };

    return (
        <div ref={setNodeRef} style={style} className={active ? 'z-10' : ''}>
            {render(item, { ...attributes, ...listeners } as any, updateItem)}
        </div>
    );
}

export function useSortableList<T extends WithId = WithId>(initialItems?: T[]): ItemManager<T> {
    const [items, setItems] = useState(initialItems ?? []);

    function moveItem(from: number, to: number) {
        const result = Array.from(items);
        const [removed] = result.splice(from, 1);
        result.splice(to, 0, removed);
        setItems(result);
    }

    function updateItem(newItem: T, idx: number) {
        setItems(items.map((item, idx_) => (idx === idx_ ? { ...item, ...newItem } : item)));
    }

    function deleteItem(id: string) {
        setItems(items.filter((item) => item.id !== id));
    }

    function addItem(item: T) {
        setItems([...items, item]);
    }

    function reset() {
        setItems([]);
    }

    return {
        items,
        moveItem,
        updateItem,
        deleteItem,
        addItem,
        reset
    };
}

// Code from: https://github.com/clauderic/dnd-kit/blob/master/packages/utilities/src/css.ts
// Licence: MIT
function transformToCSS(transform: any) {
    const { x, y, scaleX, scaleY } = transform ?? { x: 0, y: 0, scaleX: 1, scaleY: 1 };

    return `translate3d(${x ? Math.round(x) : 0}px, ${y ? Math.round(y) : 0}px, 0)`;
}
