export function enumerate<T>(iterable: Iterable<T>): IterableIterator<[number, T]> {
    const iterator = iterable[Symbol.iterator]()
    let count = 0

    return {
        [Symbol.iterator]() {
            return this
        },

        next() {
            const {value, done} = iterator.next()
            return {
                value: [count++, value],
                done
            }
        }
    }
}