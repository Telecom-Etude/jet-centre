/**
 * Logs a value to the console for debugging and returns it unchanged.
 *
 * Useful for inspecting values in the middle of expressions without breaking the chain.
 *
 * @template T
 * @param {T} value - The value to log and return.
 * @param {string} [msg] - Optional message to identify the debug log.
 * @returns {T} The same value that was passed in.
 *
 * @example
 * // Log each mapped value while still returning it
 * const e = a.map(b => dbg(f(b, c), 'after f').d);
 *
 * // Equivalent to mapping without logging
 * const e = a.map(b => b.c);
 *
 * // Logs all items after applying f, but does not modify the result
 */
export function dbg<T>(value: T, msg?: string): T {
    console.log(`\x1b[36m 🐞 ${msg ? msg + ' ' : ''}\x1b[0m${JSON.stringify(value, null, 2)}`);
    return value;
}

/**
 * Logs a message in a prettified version
 *
 * Useful for highlighting information messages during execution.
 *
 * @param {string} msg - The message to log.
 *
 * @example
 * log('Server started'); // 📢 Server started
 */
export function log(msg: string) {
    console.log(`\x1b[33m 📢 ${msg}\x1b[0m`);
}

/**
 * Asynchronously pauses execution for a given number of milliseconds.
 *
 * Can be used to delay code execution to test how the UI acts when the server takes time to load.
 *
 * @param {number} ms - Number of milliseconds to sleep.
 *
 * @example
 * await sleep(2000); // pauses for 2 seconds
 */
export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
