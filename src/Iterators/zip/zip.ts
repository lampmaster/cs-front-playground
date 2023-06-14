export function zip(...iterables: Iterable<unknown>[]): IterableIterator<unknown> {
    const iterators = iterables.map(iterable => iterable[Symbol.iterator]())
    let iteratorIndex = 0

    return {
        [Symbol.iterator]() {
            return this
        },

        next() {
            while (true) {
                const tuple = []
                let done = true
                
                for (const iterator of iterators) {
                    const iteratorResult = iterator.next()
                    done = done && iteratorResult.done

                    if (!iteratorResult.done) {
                        tuple.push(iteratorResult.value)
                    }
                }

                return {
                    done,
                    value: done ? undefined : tuple
                }
            }   
        }
    }
}