import { LinkedListNode } from "./linkedListNode"

export class LinkedList<T> {
    #first: LinkedListNode<T>
    #last: LinkedListNode<T>
    #size: number

    constructor() {
        this.#first = null
        this.#last = null
        this.#size = 0
    }

    addStart(value: T) {
        const node = new LinkedListNode(value)
        if (this.#first === null) {
            this.#last = node
        } else {
            this.#first.prev = node
            node.next = this.#first
        }

        this.#size++
        this.#first = node
    }

    addEnd(value: T) {
        const node = new LinkedListNode(value)
        if (this.#last === null) {
            this.#first = node
        } else {
            this.#last.next = node
            node.prev = this.#last
        }
        
        this.#size++
        this.#last = node
    }

    removeFirst() {
        if (this.#first !== null) {
            const nodeToRemove = this.#first
            this.#first = this.#first.next
            this.#first.prev = null
            nodeToRemove.next = null
            this.#size--
        }
    }

    removeLast() {
        if (this.#last !== null) {
            const nodeToRemove = this.#last
            this.#last = this.#last.prev
            this.#last.next = null
            nodeToRemove.prev = null
            this.#size--
        }
    }

    get first() {
        return this.#first
    }

    get last() {
        return this.#last
    }

    get size() {
        return this.#size
    }

    [Symbol.iterator]() {
        let currentNode = this.#first

        return {
            next: () => {
                if (currentNode === null) {
                    return {value: undefined, done: true}
                }

                const iteratorResult: IteratorResult<T> = {value: currentNode.value, done: false}
                currentNode = currentNode.next

                return iteratorResult
            }
        }
    }
}