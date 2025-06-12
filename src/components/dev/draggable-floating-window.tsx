'use client';

import { PointerEventHandler, ReactNode, useEffect, useRef, useState } from 'react';

import { Button } from '../ui/button';

interface WindowPosition {
    x: number;
    y: number;
}

interface WindowSize {
    width: number;
    height: number;
}

interface WindowState {
    expand: 'expanded' | 'collapsed';
}

export default function DraggableFloatingWindow({
    children,
    title,
}: {
    children?: ReactNode;
    title: string;
}) {
    const [windowPosition, setWindowPosition] = useState<WindowPosition>({
        x: 0,
        y: 0,
    });
    const [windowSize, setWindowSize] = useState<WindowSize>({ width: 500, height: 500 });
    const [drag, setDrag] = useState<boolean>(false);
    const [dragged, setDragged] = useState<boolean>(false);
    const [resize, setResize] = useState<boolean>(false);
    const [dragOffset, setDragOffset] = useState<WindowPosition>({ x: 0, y: 0 });
    const [windowState, setWindowState] = useState<WindowState>({ expand: 'expanded' });
    const resizeRef = useRef<HTMLDivElement>(null);

    const toggleExpandState = () => {
        if (windowState.expand == 'collapsed') {
            setWindowState({ ...windowState, expand: 'expanded' });
        } else {
            setWindowState({ ...windowState, expand: 'collapsed' });
        }
    };

    const handlePointerDownMove: PointerEventHandler<HTMLDivElement> = (event) => {
        setDrag(true);
        setDragged(false);
        setDragOffset({
            x: event.clientX - windowPosition.x,
            y: event.clientY - windowPosition.y,
        });
    };

    const handlePointerDownResize: PointerEventHandler<HTMLDivElement> = (event) => {
        setResize(true);
        setDragOffset({
            x: event.clientX - windowSize.width,
            y: event.clientY - windowSize.height,
        });
    };

    const handlePointerUpMove: PointerEventHandler<HTMLButtonElement> = () => {
        if (!dragged) {
            toggleExpandState();
        }
        setDrag(false);
    };

    useEffect(() => {
        const handlePointerUp = () => {
            setDrag(false);
            setResize(false);
        };

        const handlePointerMove = (event: PointerEvent) => {
            if (drag) {
                setDragged(true);
                setWindowPosition({
                    x: event.clientX - dragOffset.x,
                    y: event.clientY - dragOffset.y,
                });
            } else if (resize) {
                setWindowSize({
                    width: event.clientX - dragOffset.x,
                    height: event.clientY - dragOffset.y,
                });
            }
        };

        document.addEventListener('pointerup', handlePointerUp);
        document.addEventListener('pointermove', handlePointerMove);

        return () => {
            document.removeEventListener('pointerup', handlePointerUp);
            document.removeEventListener('pointermove', handlePointerMove);
        };
    }, [drag, resize, dragOffset.x, dragOffset.y]);

    return (
        <>
            {windowState.expand == 'expanded' && (
                <div
                    className="absolute rounded z-20 flex flex-col overflow-hidden"
                    style={{
                        left: windowPosition.x + 'px',
                        top: windowPosition.y + 'px',
                        width: windowSize.width + 'px',
                        height: windowSize.height + 'px',
                    }}
                >
                    <div
                        className="min-h-2 bg-box-title select-none flex content-between place-items-center"
                        onPointerDown={handlePointerDownMove}
                    >
                        <div>
                            <Button variant="ghost" onPointerUp={handlePointerUpMove}>
                                -
                            </Button>
                        </div>
                        <div className="pl-4 pr-4">{title}</div>
                    </div>
                    <div className="p-4 bg-box-background h-full">
                        {children}
                        <div
                            className="absolute size-4 cursor-se-resize bg-red-400 bottom-0 right-0"
                            onPointerDown={handlePointerDownResize}
                            ref={resizeRef}
                        ></div>
                    </div>
                </div>
            )}
            {windowState.expand == 'collapsed' && (
                <div
                    className="absolute rounded-full z-20 flex flex-col overflow-hidden bg-box-title"
                    style={{ left: windowPosition.x + 'px', top: windowPosition.y + 'px' }}
                    onPointerDown={handlePointerDownMove}
                >
                    <Button variant="ghost" onPointerUp={handlePointerUpMove}>
                        +
                    </Button>
                </div>
            )}
        </>
    );
}
