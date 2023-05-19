import { createLinkedList } from "."

describe('', () => {
    it('first and last element === null when LinkedList is empty', () => {
        const list = createLinkedList()
        expect(list.first).toBe(null)
        expect(list.last).toBe(null)
        expect(list.size).toBe(0)
    })

    it('first element === last element when there is only one element on addEnd', () => {
        const list = createLinkedList()
        list.addEnd(1)
        expect(list.last.value).toBe(1)
        expect(list.first.value).toBe(1)
        expect(list.first.next).toBeNull()
        expect(list.last.prev).toBeNull()
        expect(list.first.next).toBe(list.last.prev)
        expect(list.size).toBe(1)
    })

    it('first element === last element when there is only one element on on addStart', () => {
        const list = createLinkedList()
        list.addStart(1)
        expect(list.last.value).toBe(1)
        expect(list.first.value).toBe(1)
        expect(list.first.next).toBeNull()
        expect(list.last.prev).toBeNull()
        expect(list.first.next).toBe(list.last.prev)
        expect(list.size).toBe(1)
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
        expect(list.size).toBe(3)
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
        expect(list.size).toBe(3)
    })

    it('remove last element', () => {
        const list = createLinkedList()
        list.addEnd(1)
        list.addEnd(2)
        list.addEnd(3)
        list.removeLast()
        expect(list.last.value).toBe(2)
        expect(list.size).toBe(2)
    })

    it('remove all elements from end', () => {
        const list = createLinkedList()
        list.addEnd(1)
        list.addEnd(2)
        list.addEnd(3)
        list.removeLast()
        list.removeLast()
        list.removeLast()
        expect(list.last).toBeNull()
        expect(list.first).toBeNull()
        expect(list.size).toBe(0)
    })

    it("Don't do anything on remove element from end when the list is empty", () => {
        const list = createLinkedList()
        expect(list.last).toBeNull()
        expect(list.first).toBeNull()
        expect(list.size).toBe(0)
        list.removeLast()
        list.removeLast()
        list.removeLast()
        expect(list.last).toBeNull()
        expect(list.first).toBeNull()
        expect(list.size).toBe(0)
    })

    it('remove first element', () => {
        const list = createLinkedList()
        list.addEnd(1)
        list.addEnd(2)
        list.addEnd(3)
        list.removeFirst()
        expect(list.first.value).toBe(2)
        expect(list.size).toBe(2)
    })

    it('remove all elements from start', () => {
        const list = createLinkedList()
        list.addEnd(1)
        list.addEnd(2)
        list.addEnd(3)
        list.removeFirst()
        list.removeFirst()
        list.removeFirst()
        expect(list.last).toBeNull()
        expect(list.first).toBeNull()
        expect(list.size).toBe(0)
    })

    it("Don't do anything on remove element from start when the list is empty", () => {
        const list = createLinkedList()
        expect(list.last).toBeNull()
        expect(list.first).toBeNull()
        expect(list.size).toBe(0)
        list.removeFirst()
        list.removeFirst()
        list.removeFirst()
        expect(list.last).toBeNull()
        expect(list.first).toBeNull()
        expect(list.size).toBe(0)
    })

    describe('Remove any elemnt', () => {
        it('Remove element when linked list is empty', () => {
            const list = createLinkedList()
            expect(list.delete((value) => value === 1)).toBeNull()
        })

        it('Remove element when linked list has one element', () => {
            const list = createLinkedList()
            list.addEnd(1)
            expect(list.delete((value) => value === 1)).toBe(1)
        })

        it('Remove element when linked list has two elements', () => {
            const list = createLinkedList()
            list.addEnd(1)
            list.addEnd(2)
            expect(list.delete((value) => value === 2)).toBe(2)
        })

        it('Remove element when linked list has more than two elements', () => {
            const list = createLinkedList()
            list.addEnd(1)
            list.addEnd(2)
            list.addEnd(4)
            list.addEnd(3)
            expect(list.delete((value) => value === 2)).toBe(2)
        })

        it('Remove not existed element when linked list has several elements', () => {
            const list = createLinkedList()
            list.addEnd(1)
            list.addEnd(2)
            expect(list.delete((value) => value === 3)).toBeNull()
        })
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

    it('should find node', () => {
        const list = createLinkedList()
        list.addEnd(1)
        list.addEnd(2)
        list.addEnd(10)
        
        expect(list.find(value => value === 1)).toBe(1)
        expect(list.find(value => value === 2)).toBe(2)
        expect(list.find(value => value === 10)).toBe(10)
        expect(list.find(value => value === 3)).toBeNull()
    }) 
})