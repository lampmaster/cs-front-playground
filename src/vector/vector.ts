import { TypedArray, TypedArrayConstructor } from "../types";

type VectorOptions = {
    copacity: number
}

export class Vector {
    #TypedArray: TypedArray
    #TypedArrayConstructor: TypedArrayConstructor
    #length: number = 0

    constructor(TypedArrayConstructor: TypedArrayConstructor, options: VectorOptions) {
        this.#TypedArrayConstructor = TypedArrayConstructor
        this.#TypedArray = new TypedArrayConstructor(options.copacity)
    }

    pop() {
        const valueToRemove = this.#TypedArray[this.#length - 1]
        this.#TypedArray[this.#length - 1] &= 0
        this.#length--
        return valueToRemove
    }

    push(...values: number[]) {
        for(const value of values) {
            if (this.#needToIncreaseBufferLength) {
                this.#increaseBufferLength()
            }
            this.#length++
            this.#TypedArray[this.#length - 1] |= value 
        }
    }

    shift() {
        if (this.#length > 0) {
            const valueToRemove = this.#TypedArray[0]
            this.#TypedArray[0] &= 0
    
            for (let i = 0; i < this.#length; i++) {
                this.#TypedArray[i] |= this.#TypedArray[i + 1]
                this.#TypedArray[i + 1] &= 0
            }
    
            this.#length--
            return valueToRemove
        }
    }

    unshift(...values: number[]) {
        const newElementsCount = values.length
        while (this.#length + newElementsCount > this.copacity) {
            this.#increaseBufferLength()
        }

        for(let i = this.#length - 1; i >= 0; i--) {
            const elementToMove = this.#TypedArray[i]
            this.#TypedArray[i] &= 0
            this.#TypedArray[i + newElementsCount] |= elementToMove
        }

        let i = 0
        for (const value of values) {
            this.#TypedArray[i] |= value
            i++
        } 

        this.#length = this.#length + newElementsCount
    }

    get length() {
        return this.#length
    }

    get copacity() {
        return this.#TypedArray.length
    }

    get #needToIncreaseBufferLength() {
        return this.length === this.copacity
    }

    #increaseBufferLength() {
        const newCopacity = this.copacity * 2
        const oldTypedArray = this.#TypedArray
        this.#TypedArray = new this.#TypedArrayConstructor(newCopacity)

        for (let i = 0; i < oldTypedArray.length; i++) {
            this.#TypedArray[i] |= oldTypedArray[i]
        }
    }
}