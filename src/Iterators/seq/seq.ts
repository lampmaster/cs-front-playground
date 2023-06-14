export function seq(...iterables: Iterable<unknown>[]): IterableIterator<unknown> {
    const iterators = iterables.map(iterable => iterable[Symbol.iterator]())
    let iteratorIndex = 0
    let done = true

    return {
        [Symbol.iterator]() {
            return this
        },

        next() {
            while (true) {
                if (iteratorIndex >= iterators.length && done) {
                    return {
                        done,
                        value: undefined
                    }
                }

                const iteratorResult = iterators[iteratorIndex].next()
                const value = iteratorResult.value
                done = iteratorResult.done

                if (!done) {
                    return {
                        value,
                        done
                    }
                }

                if (done) {
                    iteratorIndex++
                }
            }   
        }
    }
}