import { dbg } from '@/lib/utils';

const EXCEL_CE = process.env.TEMPLATE_EXCEL_CE;
const EXCEL_RM = process.env.TEMPLATE_EXCEL_RM;

export interface Template {
    name: string;
    id: string;
    excel?: string;
}

export const TEMPLATES: Template[] = [
    { name: 'ACC', id: dbg(process.env.TEMPLATE_ACC) },
    { name: 'ACE', id: process.env.TEMPLATE_ACE, excel: EXCEL_CE },
    { name: 'ARM', id: process.env.TEMPLATE_ARM, excel: EXCEL_RM },
    { name: 'BC', id: process.env.TEMPLATE_BC, excel: EXCEL_CE },
    { name: 'BCR', id: process.env.TEMPLATE_BCR, excel: EXCEL_CE },
    { name: 'BA', id: process.env.TEMPLATE_BC },
    { name: 'CC', id: process.env.TEMPLATE_CE },
    { name: 'ACC', id: process.env.TEMPLATE_ACE },
    { name: 'CE', id: process.env.TEMPLATE_CE, excel: EXCEL_CE },
    { name: 'PVRF', id: process.env.TEMPLATE_PVRI },
    { name: 'PVRI', id: process.env.TEMPLATE_PVRF },
    { name: 'RM', id: process.env.TEMPLATE_RM, excel: EXCEL_RM },
];
