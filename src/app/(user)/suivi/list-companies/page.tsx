import { getCompanies } from './actions';
import { columns } from './columns';
import { CompanyTable } from './data-table';

export default async function DemoPage() {
    const companies = await getCompanies();
    if (companies === undefined) throw new Error();

    return (
        <div className="px-main py-main">
            <CompanyTable columns={columns} data={companies} />
        </div>
    );
}
