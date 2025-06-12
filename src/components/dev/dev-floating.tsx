import { Button } from '../ui/button';

import DraggableFloatingWindow from './draggable-floating-window';

export default function DevWindow() {
    return (
        <>
            {process.env.NODE_ENV !== 'production' && (
                <DraggableFloatingWindow title="Dev Tools">
                    <div className="flex flex-col space-y-2">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                    </div>
                </DraggableFloatingWindow>
            )}
        </>
    );
}
