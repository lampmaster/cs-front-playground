import { TypedArray, TypedArrayConstructor } from "./types";

// current implementation works only with numbers
export class Stack<T> {
    #topIndex: number = -1
    #TypedArray: TypedArray
    
    constructor(TypedArray: TypedArrayConstructor, size: number) {
        this.#TypedArray = new TypedArray(size)
    }

    push(value: T) {
        if (this.isFull) {
            throw new Error("Can't add an element, the stack is full")
        }

        if (typeof value !== "number") {
            throw new Error('Stack supports only numbers')
        }

        this.#topIndex++
        this.#TypedArray[this.#topIndex] = value
    }

    pop() {
        if (this.isEmpty) {
            throw new Error("Can't pop element, the stack is empty")
        }
        const elementToRemove = this.#TypedArray[this.#topIndex]
        this.#TypedArray[this.#topIndex] = 0
        this.#topIndex--
        return elementToRemove
    }

    get head() {
        if (this.isEmpty) {
            return null
        }
        return this.#TypedArray[this.#topIndex]
    }

    get isEmpty() {
        return this.#topIndex === -1
    }

    get isFull() {
        return this.#topIndex === this.#TypedArray.length - 1
    }
}