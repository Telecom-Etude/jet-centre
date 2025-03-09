'use client';

import { Task, TaskBulletList } from '@/components/meta-components/task-bullet-list';

export function FollowMissionTaskList({ initialList }: { initialList: Task[] }) {
    return <TaskBulletList initialList={initialList} />;
}
