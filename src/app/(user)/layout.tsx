'use client';

import NavBar from '@/components/navigation/navbar';
import { TopBar } from '@/components/navigation/topbar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import React, { useState } from 'react';

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex flex-row h-full bg-gradient-to-br from-background to-background/95 h-[100dvh]">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel
                    minSize={15}
                    maxSize={30}
                    defaultSize={20}
                    className="bg-box-background/50 backdrop-blur-sm border-r border-box-hover/10"
                >
                    <NavBar />
                </ResizablePanel>
                <ResizableHandle className="w-1 bg-box-hover/10 hover:bg-primary/20 transition-colors" />
                <ResizablePanel defaultSize={80}>
                    <div className="flex flex-col p-8 space-y-8 h-full overflow-auto">
                        <TopBar />
                        <main className="min-h-0 flex-1">{children}</main>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default Layout;
