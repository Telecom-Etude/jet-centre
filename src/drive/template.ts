const EXCEL_CE = process.env.TEMPLATE_EXCEL_CE;
const EXCEL_RM = process.env.TEMPLATE_EXCEL_RM;

export interface Template {
    name: string;
    fileId: string;
    excelId?: string;
}

export const TEMPLATES: Template[] = [
    { name: 'ACC', fileId: process.env.TEMPLATE_ACC },
    { name: 'ACE', fileId: process.env.TEMPLATE_ACE, excelId: EXCEL_CE },
    { name: 'ARM', fileId: process.env.TEMPLATE_ARM, excelId: EXCEL_RM },
    { name: 'BC', fileId: process.env.TEMPLATE_BC, excelId: EXCEL_CE },
    { name: 'BCR', fileId: process.env.TEMPLATE_BCR, excelId: EXCEL_CE },
    { name: 'BA', fileId: process.env.TEMPLATE_BA },
    { name: 'CC', fileId: process.env.TEMPLATE_CC },
    {
        name: 'CE',
        fileId: process.env.TEMPLATE_CE,
        excelId: EXCEL_CE,
    },
    { name: 'PVRF', fileId: process.env.TEMPLATE_PVRF },
    { name: 'PVRI', fileId: process.env.TEMPLATE_PVRI },
    { name: 'RM', fileId: process.env.TEMPLATE_RM, excelId: EXCEL_RM },
];
