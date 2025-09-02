/**
 * A bunch of tools used widely across the codebase.
 *
 * @file utils.ts
 */

import { Address } from '@prisma/client';
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

export function dbg<T>(value: T, msg?: string): T {
    console.log(`\x1b[36m 🐞 ${(msg && msg + ' ') || ''}\x1b[0m${JSON.stringify(value, null, 2)}`);
    return value;
}

export function getProperty(obj: any, path: string) {
    return path.split('.').reduce((acc, key) => acc[key], obj);
}

export function log(msg: string) {
    console.log(`\x1b[33m 📢 ${msg}\x1b[0m`);
}

export function unwrap<T>(x: T | undefined | null): T {
    if (x === undefined || x === null) throw new Error('Option unwrap on a None value');
    return x;
}

export function arrayEqual<T>(
    lhs: T[],
    rhs: T[],
    equal: (lhs: T, rhs: T) => boolean = (lhs, rhs) => lhs === rhs
): boolean {
    if ((!lhs && rhs) || (lhs && !rhs)) return false;
    if (!lhs && !rhs) return true;
    if (lhs.length !== rhs.length) return false;
    for (let i = 0; i < lhs.length; ++i) {
        if (!equal(lhs[i], rhs[i])) return false;
    }
    return true;
}

/**
 * Reloads the window.
 *
 * This checks that the component is in the client-side version of the component.
 */
export function reloadWindow() {
    if (typeof window != 'undefined') location.reload();
}

export interface PersonName {
    firstName: string;
    lastName: string;
}

export interface PersonNameEmail extends PersonName {
    email: string;
}

/**
 * Returns a string with the full name of person
 */
export function personName({ firstName, lastName }: PersonName) {
    return firstName + ' ' + lastName;
}

/**
 * Returns a string with the full name of person and the email address between parentheses.
 */
export function personNameEmail({ email, ...name }: PersonNameEmail): string {
    return `${personName(name)} (${email})`;
}

/**
 * Returns a string with the full name and email address
 * of every person of the given list of people
 */
export function peopleNameEmail(people: PersonNameEmail[]): string {
    const len = people.length;
    if (len === 0) return personNameEmail(people[0]);

    let display = '';
    for (let i = 0; i < len; ++i) {
        display += `${personNameEmail(people[i])}`;
        if (i === len - 1) {
            break;
        } else if (i === len - 2) {
            display += ' et ';
        } else {
            display += ', ';
        }
    }

    return display;
}

/**
 * Returns a string with the full address, from an address database instance.
 */
export function stringifyAddress(address: Address): string {
    return (
        address.streetNumber +
        ' ' +
        address.streetName +
        ', ' +
        address.postalCode +
        ' ' +
        address.city +
        ', ' +
        address.country
    );
}

/**
 * Escape HTML in user input, that shouldn't contain HTML.
 *
 * This function must be used on user input that is put in a dangerouslySetInnerHTML.
 */
export function sanitiseHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
