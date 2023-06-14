export function filter<T>(iterable: Iterable<T>, cb: (value?: T, index?: number, arr?: Iterable<T>) => boolean): IterableIterator<T> {
    const iterator = iterable[Symbol.iterator]()

    return {
        [Symbol.iterator]() {
            return this
        },

        next() {
            while (true) {
                const { value, done } = iterator.next()

                if (cb(value)) {
                    return {
                        value,
                        done
                    }
                }
                
                if (done) {
                    return {
                        value: undefined,
                        done
                    }
                } 
            }            
        }
    }
}