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

export type TemplateName =
    | 'ACC'
    | 'ACE'
    | 'ARM'
    | 'BC'
    | 'BCR'
    | 'BA'
    | 'CC'
    | 'CE'
    | 'PVRF'
    | 'PVRI'
    | 'RM';

export const TEMPLATES: Record<TemplateName, { id: string; excel?: NameIdFile }> = {
    ACC: { id: process.env.TEMPLATE_ACC },
    ACE: { id: process.env.TEMPLATE_ACE, excel: EXCEL_CE },
    ARM: { id: process.env.TEMPLATE_ARM, excel: EXCEL_RM },
    BC: { id: process.env.TEMPLATE_BC, excel: EXCEL_CE },
    BCR: { id: process.env.TEMPLATE_BCR, excel: EXCEL_CE },
    BA: { id: process.env.TEMPLATE_BA },
    CC: { id: process.env.TEMPLATE_CC },
    CE: { id: process.env.TEMPLATE_CE, excel: EXCEL_CE },
    PVRF: { id: process.env.TEMPLATE_PVRF },
    PVRI: { id: process.env.TEMPLATE_PVRI },
    RM: { id: process.env.TEMPLATE_RM, excel: EXCEL_RM },
} as const;

export const TEMPLATE_NAMES: TemplateName[] = Object.keys(TEMPLATES) as TemplateName[];
