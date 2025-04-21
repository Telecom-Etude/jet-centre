'use client';

import { useState } from 'react';

import { Checkbox } from '../ui/checkbox';

export interface Task {
    id: string;
    name: string;
    date: Date;
    checked: boolean;
}

export function TaskBulletList({ initialList }: { initialList: Task[] }) {
    const [tasks, setTasks] = useState(initialList);

    const checkTask = (id: string) => {
        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, checked: !task.checked } : task))
        );
    };

    return (
        <>
            {tasks.map((task, i) => (
                <div key={i} className="flex items-center space-x-4">
                    <Checkbox checked={task.checked} onCheckedChange={() => checkTask(task.id)} />
                    <p>{task.date.toLocaleDateString()}</p>
                    <p>{task.name}</p>
                </div>
            ))}
        </>
    );
}
