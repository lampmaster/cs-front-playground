export function take<T>(iterable: Iterable<T>, limit: number): IterableIterator<T> {
    const iterator = iterable[Symbol.iterator]()
    let count = 0

    return {
        [Symbol.iterator]() {
            return this
        },

        next() {
            const { value, done } = iterator.next()
            const result = {
                value,
                done
            }
            if (count >= limit) {
                result.done = true
            }

            count++
            
            return result
        }
    }
}