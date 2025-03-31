export function LoadingFullStops() {
    return (
        <div className="flex gap-2 justify-center rounded items-center p-main w-fit">
            <span className="sr-only">Loading...</span>
            <div className="h-2 w-2 size-8 bg-primary rounded-full animate-bounce [animation-delay:-0.4s]" />
            <div className="h-2 w-2 size-8 bg-primary rounded-full animate-bounce [animation-delay:-0.2s]" />
            <div className="h-2 w-2 size-8 bg-primary rounded-full animate-bounce" />
        </div>
    );
}
