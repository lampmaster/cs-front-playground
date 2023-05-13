import { Vector } from "./vector"

describe('Testing Vector', () => {
    it('Empty Vector', () => {
        const vector = new Vector(Uint8Array, {copacity: 10})
        expect(vector.pop()).toBeUndefined()
        expect(vector.shift()).toBeUndefined()
    })

    describe('Vector should increase the copacity when there is not enough space for new elements', () => {
        it('Should work with adding elements to the end of the array', () => {
            const vector = new Vector(Uint8Array, {copacity: 2})
            expect(vector.copacity).toBe(2)
            vector.push(10, 20)
            expect(vector.copacity).toBe(2)
            vector.push(40)
            expect(vector.copacity).toBe(4)
        })

        it('Should work with adding elements to the start of the array', () => {
            const vector = new Vector(Uint8Array, {copacity: 2})
            expect(vector.copacity).toBe(2)
            vector.unshift(10, 20)
            expect(vector.copacity).toBe(2)
            vector.unshift(40)
            expect(vector.copacity).toBe(4)
        })  

        it('Should increase copacity till it will greater than number of new elements + old elements', () => {
            const vector = new Vector(Uint8Array, {copacity: 2})
            expect(vector.copacity).toBe(2)
            const newElements = [10, 20, 40, 50, 60, 70]
            vector.push(...newElements)
            expect(vector.copacity >= newElements.length).toBeTruthy()
        })
    })

    it('Should add element to the end of the array', () => {
        const vector = new Vector(Uint8Array, {copacity: 10})
        vector.push(1)
        expect(vector.length).toBe(1)
        vector.push(10, 20)
        expect(vector.length).toBe(3)
    })

    it('Should add element to the start of the array', () => {
        const vector = new Vector(Uint8Array, {copacity: 10})
        vector.unshift(1)
        expect(vector.length).toBe(1)
        vector.unshift(10, 20)
        expect(vector.length).toBe(3)
        expect(vector.pop()).toBe(1)
        expect(vector.shift()).toBe(10)
    })

    it('Should remove element from the end of the array', () => {
        const vector = new Vector(Uint8Array, {copacity: 10})
        vector.push(10, 20, 30)
        expect(vector.length).toBe(3)

        expect(vector.pop()).toBe(30)
    })

    it('Should remove element from the start of the array', () => {
        const vector = new Vector(Uint8Array, {copacity: 10})
        vector.push(10, 20, 30)
        expect(vector.length).toBe(3)

        expect(vector.shift()).toBe(10)
        expect(vector.length).toBe(2)
    })
})