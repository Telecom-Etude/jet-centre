import { UserEditor } from './user-editor';
import { getAdmins } from './users';
import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';

export default async function Page() {
    const admins = await getAdmins();
    return (
        <Box>
            <BoxHeader>
                <BoxTitle>Gestion des utilisateurs</BoxTitle>
            </BoxHeader>
            <BoxContent>
                {admins?.map((admin, i) => (
                    <UserEditor
                        email={admin.user.person.email}
                        key={i}
                        adminId={admin.id}
                        position={admin.position}
                    />
                ))}
            </BoxContent>
        </Box>
    );
}
