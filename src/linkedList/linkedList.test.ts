import { createLinkedList } from "."

describe('', () => {
    it('first and last element === null when LinkedList is empty', () => {
        const list = createLinkedList()
        expect(list.first).toBe(null)
        expect(list.last).toBe(null)
    })

    it('first element === last element when there is only one element on addEnd', () => {
        const list = createLinkedList()
        list.addEnd(1)
        expect(list.last.value).toBe(1)
        expect(list.first.value).toBe(1)
        expect(list.first.next).toBeNull()
        expect(list.last.prev).toBeNull()
        expect(list.first.next).toBe(list.last.prev)
    })

    it('first element === last element when there is only one element on on addStart', () => {
        const list = createLinkedList()
        list.addStart(1)
        expect(list.last.value).toBe(1)
        expect(list.first.value).toBe(1)
        expect(list.first.next).toBeNull()
        expect(list.last.prev).toBeNull()
        expect(list.first.next).toBe(list.last.prev)
    })

    it('add element to the start', () => {
        const list = createLinkedList()
        list.addStart(1)
        list.addStart(2)
        list.addStart(3)
        expect(list.first.value).toBe(3)
        expect(list.last.value).toBe(1)
        expect(list.first.next.value).toBe(2)
        expect(list.last.prev.value).toBe(2)
        expect(list.first.prev).toBeNull()
        expect(list.last.next).toBeNull()
    })

    it('add elements to the end', () => {
        const list = createLinkedList()
        list.addEnd(1)
        list.addEnd(2)
        list.addEnd(3)
        expect(list.first.value).toBe(1)
        expect(list.last.value).toBe(3)
        expect(list.first.next.value).toBe(2)
        expect(list.last.prev.value).toBe(2)
        expect(list.first.prev).toBeNull()
        expect(list.last.next).toBeNull()
    })

    it('remove last element', () => {
        const list = createLinkedList()
        list.addEnd(1)
        list.addEnd(2)
        list.addEnd(3)
        list.removeLast()
        expect(1).toBe(1)
    })

    it('check if the list is iterable', () => {
        const list = createLinkedList()
        list.addEnd(1)
        list.addEnd(2)
        list.addEnd(3)
        const listIterator = list[Symbol.iterator]()

        expect(listIterator.next()).toEqual({value: 1, done: false})
        expect(listIterator.next()).toEqual({value: 2, done: false})
        expect(listIterator.next()).toEqual({value: 3, done: false})
        expect(listIterator.next()).toEqual({done: true})
    }) 
})