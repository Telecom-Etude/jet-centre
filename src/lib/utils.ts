/**
 * A bunch of tools used widely across the codebase.
 *
 * @file utils.ts
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Function to merge multiple tailwind classname strings, in an intelligent
 * way (not just by concatenating the strings).
 *
 * @export
 * @function cn
 * @param {...ClassValue[]} inputs - classname strings to concatenate
 * @return {string} - the merged classname.
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

/**
 * Non-breakable space
 *
 * See {@link https://github.com/johnridesabike/coronate/blob/master/src/HtmlEntities.res}
 * for the escape code's list for symbols in javascript.
 *
 * @constant
 * @type {string}
 */
export const NBSP: string = '\u00A0';

function dbg<T>(value: T, msg?: string): T {
    console.log(`// DBG ${msg + ' '}// ${value}`);
    return value;
}

export function getProperty(obj: any, path: string) {
    return path.split('.').reduce((acc, key) => acc[key], obj);
}
