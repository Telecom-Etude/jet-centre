import i18next from 'i18next';
import { z, RefinementCtx } from 'zod';
import { zodI18nMap } from 'zod-i18n-map';
import translation from 'zod-i18n-map/locales/fr/zod.json';

// lng and resources key depend on your locale.
i18next.init({
    lng: 'fr',
    resources: {
        es: { zod: translation },
    },
});
z.setErrorMap(zodI18nMap);

// export configured zod instance
export { z };

export const EMPTY_STRING = z.string().max(0);

export function required(val: any, ctx: RefinementCtx) {
    if (val === undefined || (typeof val === 'string' && val.length === 0)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Requis',
        });
    }
}

export function stringDate(val: any, ctx: RefinementCtx) {
    const dateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (typeof val === 'string') {
        if (!dateRegex.test(val)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Invalid date format, expected dd/mm/yyyy',
            });
        }
    } else {
        ctx.addIssue({
            code: z.ZodIssueCode.invalid_type,
            expected: z.ZodParsedType.string,
            received:
                z.ZodParsedType[typeof val as keyof typeof z.ZodParsedType] ||
                z.ZodParsedType.unknown,
        });
    }
}

export function nonemptyexcluded<T>(val: T[], ctx: RefinementCtx) {
    if (val.every((v) => (v as any).excluded ?? false)) {
        ctx.addIssue({
            code: z.ZodIssueCode.too_small,
            message: 'Array must contain at least 1 non excluded element',
            minimum: 1,
            inclusive: true,
            type: 'array',
        });
    }
}
