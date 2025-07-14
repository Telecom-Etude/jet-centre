import { getClients } from './actions';

export default async function Page() {
    const clients = await getClients();

    return (
        <div>
            {clients ? (
                clients.map(({ name }, i) => (
                    <div key={i} className="flex">
                        <p>{name}</p>
                    </div>
                ))
            ) : (
                <p>500 error</p>
            )}
        </div>
    );
}
