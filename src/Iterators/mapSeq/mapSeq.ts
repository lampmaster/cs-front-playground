export function mapSeq<T>(iterable: Iterable<T>, cbs: Iterable<(el?: T, index?: number, arr?: Iterable<T>) => unknown>): IterableIterator<unknown> {
    const iterator = iterable[Symbol.iterator]()

    return {
        [Symbol.iterator]() {
            return this
        },

        next() {
            const iteratorResult = iterator.next()

            for (const cb of cbs) {
                iteratorResult.value = cb(iteratorResult.value)
            }

            return {
                value: iteratorResult.value,
                done: iteratorResult.done
            }
        }
    }
} 