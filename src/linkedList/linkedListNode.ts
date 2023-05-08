export class LinkedListNode<T> {
    next: LinkedListNode<T> | null
    prev: LinkedListNode<T> | null
    value: T

    constructor(value: T) {
        this.next = null
        this.prev = null
        this.value = value
    }
}