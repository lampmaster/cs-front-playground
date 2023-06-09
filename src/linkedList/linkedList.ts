import { LinkedListNode } from "./linkedListNode"

export class LinkedList<T> {
    #first: LinkedListNode<T> | undefined
    #last: LinkedListNode<T> | null
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
            const newFirst = nodeToRemove.next
            if (newFirst === null) {
                this.#last = null
            } else {
                newFirst.prev = null
            }
            this.#first = newFirst
            nodeToRemove.next = null
            this.#size--

            return nodeToRemove
        }
        
        return null
    }

    removeLast() {
        if (this.#last !== null) {
            const nodeToRemove = this.#last
            const newLast = this.#last.prev
            if (newLast === null) {
                this.#first = null
            } else {
                newLast.next = null
            }

            this.#last = newLast
            nodeToRemove.prev = null
            this.#size--

            return nodeToRemove
        }

        return null
    }

    find(fn: (value: T) => boolean): null | T {
        const linkedListNode = this.#find(fn)

        if (linkedListNode !== null) {
            return linkedListNode.value
        }

        return null
    }

    delete(fn: (value: T) => boolean): T | null {
        const currentNode = this.#find(fn)

        if (currentNode === null) {
            return null
        }

        if (currentNode === this.#first) {
            this.removeFirst()
        } else if (currentNode === this.#last) {
            this.removeLast()
        } else {
            const prevNode = currentNode.prev
            const nextNode = currentNode.next
    
            prevNode.next = nextNode
            nextNode.prev = prevNode
        }

        return currentNode.value
    }

    #find(fn: (value: T) => boolean): null | LinkedListNode<T> {
        let currentNode = this.#first
        let isFind = false
        
        while (currentNode !== null) {
            isFind = fn(currentNode.value)

            if (isFind) {
                break
            }
            
            currentNode = currentNode.next
        }

        if (currentNode != null) {
            return currentNode
        }

        return null
    }

    get first(): LinkedListNode<T> | null {
        return this.#first
    }

    get last(): LinkedListNode<T> | null {
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