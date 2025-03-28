export interface NameIdFile {
    id: string;
    name: string;
}

export interface Template {
    file: NameIdFile;
    excel?: NameIdFile;
}

const EXCEL_CE: NameIdFile = { id: process.env.TEMPLATE_EXCEL_CE, name: 'Excel CE/ACE/BC/BCR' };
const EXCEL_RM: NameIdFile = { id: process.env.TEMPLATE_EXCEL_RM, name: 'Excel RM/ARM' };

export const TEMPLATES: Template[] = [
    { file: { name: 'ACC', id: process.env.TEMPLATE_ACC } },
    { file: { name: 'ACE', id: process.env.TEMPLATE_ACE }, excel: EXCEL_CE },
    { file: { name: 'ARM', id: process.env.TEMPLATE_ARM }, excel: EXCEL_RM },
    { file: { name: 'BC', id: process.env.TEMPLATE_BC }, excel: EXCEL_CE },
    { file: { name: 'BCR', id: process.env.TEMPLATE_BCR }, excel: EXCEL_CE },
    { file: { name: 'BA', id: process.env.TEMPLATE_BA } },
    { file: { name: 'CC', id: process.env.TEMPLATE_CC } },
    { file: { name: 'CE', id: process.env.TEMPLATE_CE }, excel: EXCEL_CE },
    { file: { name: 'PVRF', id: process.env.TEMPLATE_PVRF } },
    { file: { name: 'PVRI', id: process.env.TEMPLATE_PVRI } },
    { file: { name: 'RM', id: process.env.TEMPLATE_RM }, excel: EXCEL_RM },
];
