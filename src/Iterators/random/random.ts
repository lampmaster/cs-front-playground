export function random(min: number, max: number): IterableIterator<number> {
    if (min > max) {
        return random(max, min)
    }

    return {
        [Symbol.iterator]() {
            return this
        },

        next() {
            const value = Math.floor(Math.random() * (max - min) + min)

            return {
                value: value,
                done: false
            }
        }
    }
}