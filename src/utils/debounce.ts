import { useRef } from 'react'

/**
 * a simple debounce function
 *
 * @param callback The function to debounce.
 * @param delay The delay (in ms) to wait before invoking the callback.
 * @returns A debounced version of the input function.
 */
// eslint-disable-next-line
export function debounce<T extends (...args: any[]) => void>(
	callback: T,
	delay: number
): (...args: Parameters<T>) => void {
	const timeout = useRef<NodeJS.Timeout | null>(null)

	return (...args: Parameters<T>) => {
		if (timeout.current) {
			clearTimeout(timeout.current)
		}

		timeout.current = setTimeout(() => {
			callback(...args)
		}, delay)
	}
}
