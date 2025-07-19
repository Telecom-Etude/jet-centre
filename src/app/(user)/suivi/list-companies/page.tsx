import { getCompanies } from './actions';
import { ListCompanies } from './client';

export default async function DemoPage() {
    const companies = await getCompanies();
    if (companies === undefined) throw new Error();

    return (
        <div className="px-main py-main h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-main h-full">
                <ListCompanies data={companies} />
            </div>
        </div>
    );
}
