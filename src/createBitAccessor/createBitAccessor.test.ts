import { createBitAccessor } from "./createBitAccessor"

let bitAccessor

beforeEach(() => {
    bitAccessor = createBitAccessor(new Uint8Array([0b0011, 0b0011]))
}) 

describe('Testing createBitAccessor', () => {

    it('Should get 0 bit in the 0 bite === 1', () => {
        const bit = bitAccessor.get(0, 0)
        expect(bit).toBe(1)
    })

    it('Should get 3 bit in the 0 bite === 0', () => {
        const bit = bitAccessor.get(0, 3)
        expect(bit).toBe(0)
    })

    it('Should get 2 bit in the 1 bite === 0', () => {
        const bit = bitAccessor.get(1, 2)
        expect(bit).toBe(0)
    })

    it('Should set 0 in the 0 bit of the 0 bite', () => {
        bitAccessor.set(0, 0, 0)
        const bit = bitAccessor.get(0, 0)
        expect(bit).toBe(0)
    })

    it('Should set 1 in the 2 bit of the 1 bite', () => {
        bitAccessor.set(1, 2, 1)
        const bit = bitAccessor.get(1, 2)
        expect(bit).toBe(1)
    })

    it('Should not change bit if original number has the same value', () => {
        bitAccessor.set(1, 0, 1)
        const bit = bitAccessor.get(1, 0)
        expect(bit).toBe(1)
    })
})