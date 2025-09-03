import { ErrorPage, ErrorPageProps } from './error';

export function LoadingPage(props: Omit<ErrorPageProps, 'title'>) {
    return <ErrorPage title="Chargement en cours..." {...props} />;
}

export function LoadingFullStops() {
    return (
        <div className="flex gap-2 justify-center rounded items-center p-main w-fit">
            <span className="sr-only">Chargement en cours...</span>
            <div className="h-2 w-2 size-8 bg-primary rounded-full animate-bounce [animation-delay:-0.4s]" />
            <div className="h-2 w-2 size-8 bg-primary rounded-full animate-bounce [animation-delay:-0.2s]" />
            <div className="h-2 w-2 size-8 bg-primary rounded-full animate-bounce" />
        </div>
    );
}
