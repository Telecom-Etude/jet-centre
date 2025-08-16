'use client';

import { useRef, useState } from 'react';

import { useDebounceCallback } from './use-debounce-callback';
import type { DebouncedState } from './use-debounce-callback';

type UseDebounceValueOptions<T> = {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
    equalityFn?: (left: T, right: T) => boolean;
};

/**
 * Custom hook that returns a debounced version of the provided value, along with a function to update it.
 * @param initialValue The value to be debounced
 * @param delay The delay in milliseconds before the value is updated (default is 500ms)
 * @param options Optional configurations for the debouncing behavior
 * @returns An array containing the debounced value and the function to update it
 */
export function useDebounceValue<T>(
    initialValue: T | (() => T),
    delay: number,
    options?: UseDebounceValueOptions<T>
): [T, DebouncedState<(value: T) => void>] {
    const eq = options?.equalityFn ?? ((left: T, right: T) => left === right);
    const unwrappedInitialValue = initialValue instanceof Function ? initialValue() : initialValue;
    const [debouncedValue, setDebouncedValue] = useState<T>(unwrappedInitialValue);
    const previousValueRef = useRef<T | undefined>(unwrappedInitialValue);

    const updateDebouncedValue = useDebounceCallback(setDebouncedValue, delay, options);

    // Update the debounced value if the initial value changes
    if (!eq(previousValueRef.current as T, unwrappedInitialValue)) {
        updateDebouncedValue(unwrappedInitialValue);
        previousValueRef.current = unwrappedInitialValue;
    }

    return [debouncedValue, updateDebouncedValue];
}
