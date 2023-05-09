import { Stack } from "./stack"

describe('Testing stack', () => {
    it('Adding element to the stack', () => {
        const stack = new Stack(Uint8Array, 8)
        stack.push(10)
        stack.push(15)
        stack.push(20)
        expect(stack.head).toBe(20)
        expect(stack.pop()).toBe(20)
        expect(stack.head).toBe(15)
        expect(stack.pop()).toBe(15)
        expect(stack.head).toBe(10)
        expect(stack.pop()).toBe(10)
        expect(stack.head).toBeNull()
    })
    it('Should throw an error on remove element from the empty stack', () => {
        const stack = new Stack(Uint8Array, 8)
        expect(() => stack.pop()).toThrowError("Can't pop element, the stack is empty")
        stack.push(10)
        stack.pop()
        expect(() => stack.pop()).toThrowError("Can't pop element, the stack is empty")
        expect(stack.isEmpty).toBeTruthy()
    })
    it('Should throw an error on add element when the stack is full', () => {
        const stack = new Stack(Uint8Array, 2)
        stack.push(100)
        stack.push(70)
        expect(() => stack.push(50)).toThrowError("Can't add an element, the stack is full")
        expect(stack.isFull).toBeTruthy()
    })
})
