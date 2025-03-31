import { UserEditor } from './user-editor';
import { getUsers } from './users';

export default async function Page() {
    const users = await getUsers();
    return (
        <div>
            {users?.map((user, i) => (
                <UserEditor
                    email={user.user.person.email}
                    key={i}
                    id={user.id}
                    position={user.position}
                />
            ))}
        </div>
    );
}
