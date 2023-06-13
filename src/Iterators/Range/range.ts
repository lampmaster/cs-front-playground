export class Range<T> {
    #min: number
    #max: number
    #type: 'string' | 'number'
    #index = 0
    #direction: number

    constructor(min: number | string, max: number | string) {
        if (typeof min !== typeof max) {
            throw new Error('type of min is not the same as type of max')
        }

        this.#type = typeof min === 'string' ? 'string' : 'number'
        this.#min = typeof min === 'string' ? min.codePointAt(0) : min
        this.#max = typeof max === 'string' ? max.codePointAt(0) : max
        this.#direction = 1

        if (this.#min > this.#max) {
            return new Range(max, min)
        }
    }

    reverse() {
        const tempMin = this.#min
        this.#min = this.#max
        this.#max = tempMin
        this.#direction = -this.#direction
        this.#index = 0
        return this
    }

    [Symbol.iterator]() {
        return this
    }

    next() {
        const numberValue = this.#min + this.#index
        const value = this.#currentValue(numberValue)
        const done = Math.abs(this.#max - this.#min) - Math.abs(this.#index) < 0
        this.#index += this.#direction    

        return {
            value: done ? undefined : value,
            done
        }
    }

    #currentValue(numberValue: number): string | number {
        if (this.#type === 'string') {
            return String.fromCodePoint(numberValue)
        }

        return numberValue
    }

}