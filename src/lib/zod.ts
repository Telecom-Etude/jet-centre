import { z, RefinementCtx } from 'zod';
import { fr } from 'zod/v4/locales';

z.config(fr());

// export configured zod instance
export { z };

export const EMPTY_STRING = z.string().max(0);

export function required<T>(val: T, ctx: RefinementCtx) {
    if (val === undefined || (typeof val === 'string' && val.length === 0)) {
        ctx.addIssue({
            code: 'custom',
            message: 'Requis',
        });
    }
}

export function stringDate<T>(val: T, ctx: RefinementCtx) {
    const dateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (typeof val === 'string') {
        if (!dateRegex.test(val)) {
            ctx.addIssue({
                code: 'custom',
                message: 'Invalid date format, expected dd/mm/yyyy',
            });
        }
    } else {
        ctx.addIssue({
            code: 'invalid_type',
            expected: 'string',
            received: typeof val,
        });
    }
}

export function nonEmptyExcluded<T>(val: T[], ctx: RefinementCtx) {
    if (val.every((v) => (v as { excluded: boolean }).excluded ?? false)) {
        ctx.addIssue({
            origin: 'array',
            code: 'too_small',
            message: 'Array must contain at least 1 non excluded element',
            minimum: 1,
            inclusive: true,
            type: 'array',
        });
    }
}
