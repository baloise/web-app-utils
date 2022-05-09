/**
 * The debounce function wait a certain amount of time before running the inner function again.
 * This should reduce the number of times a function is called.
 *
 * ```typescript
 * const debounceFunction = debounce(function() {
 *   // The function's code
 * }, 250);
 *
 * window.addEventListener('resize', debounceFunction);
 * ```
 */
export function debounce(func: any, wait = 300) {
  let timeout: NodeJS.Timeout
  return (...args: any) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
