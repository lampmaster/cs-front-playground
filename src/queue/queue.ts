import { LinkedList } from "../linkedList/linkedList";
import { LinkedListNode } from "../linkedList/linkedListNode";

export class Queue<T> {
    #list: LinkedList<T>
    #size: number = 0

    constructor() {
        this.#list = new LinkedList()
    }

    push(value: T) {
        this.#list.addEnd(value)
        this.#size++
    }

    pop() {
        if (this.head !== null) {
            const firsElement = this.head
            this.#list.removeFirst()
            this.#size--
    
            return firsElement
        } else {
            throw new Error('Queue is empty')
        }
    }

    unshift() {
        if (this.tail !== null) {
            const lastElement = this.tail
            this.#list.removeLast()
            this.#size--
    
            return lastElement
        } else {
            throw new Error('Queue is empty')
        }
    }

    get size() {
        return this.#size
    }

    get head() {
        if (this.#list.first === null) {
            return null
        }

        return this.#list.first.value
    }

    get tail() {
        if (this.#list.last === null) {
            return null
        }

        return this.#list.last.value
    }
}