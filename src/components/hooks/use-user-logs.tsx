import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserLog = {
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
    const [logs, setLogs] = useState<UserLog[]>([]);

    const addLog = (action: string, metadata: Record<string, any> = {}) => {
        const newLog: UserLog = {
            id: crypto.randomUUID(),
            action,
            timestamp: Date.now(),
            metadata,
        };
        setLogs((prev) => [...prev, newLog]);
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
