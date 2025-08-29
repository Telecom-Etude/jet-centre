'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import useStorageState from 'use-storage-state';

type UserLog = {
    id: string;
    action: string;
    timestamp: number;
    metadata?: Record<string, any>;
};

type UserLogsContextType = {
    logs: UserLog[];
    addLog: (action: string, metadata?: Record<string, any>) => void;
    clearLogs: () => void;
};

const UserLogsContext = createContext<UserLogsContextType | undefined>(undefined);

export const UserLogsProvider = ({ children }: { children: ReactNode }) => {
    const [logs, setLogs] = useStorageState<UserLog[]>('user-logs', { defaultValue: [] });

    const addLog = (action: string, metadata: Record<string, any> = {}) => {
        const newLog: UserLog = {
            id: crypto.randomUUID(),
            action,
            timestamp: Date.now(),
            metadata,
        };
        setLogs((prev) => (prev === undefined ? [newLog] : [...prev, newLog]));
    };

    const clearLogs = () => setLogs([]);

    return (
        <UserLogsContext.Provider value={{ logs, addLog, clearLogs }}>
            {children}
        </UserLogsContext.Provider>
    );
};

export const useUserLogs = () => {
    const context = useContext(UserLogsContext);
    if (!context) {
        throw new Error('useUserLogs must be used inside a UserLogsProvider');
    }
    return context;
};
