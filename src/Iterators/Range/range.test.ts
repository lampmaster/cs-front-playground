import { Range } from "./range"

describe('Testing Range', () => {
    it('Shuld return positive iterable range of numbers', () => {
        const rangeIterator = new Range(10, 15)
        const range = [...rangeIterator]
        
        expect(range).toEqual([10, 11, 12, 13, 14, 15])
    })

    it('Shuld return negative iterable range of numbers', () => {
        const rangeIterator = new Range(-3, 2)
        const range = [...rangeIterator]
        
        expect(range).toEqual([-3, -2, -1, 0, 1, 2])
    })

    it('Shuld return iterable range of numbers from negative number to positive one', () => {
        const rangeIterator = new Range(-2, 3)
        const range = [...rangeIterator]
        expect(range).toEqual([-2, -1, 0, 1, 2, 3])
    })

    it('Shuld return iterable range of numbers in a normal order when max and min numbers swaped', () => {
        const rangeIterator = new Range(15, 10)
        const range = [...rangeIterator]
        expect(range).toEqual([10, 11, 12, 13, 14, 15])
    })

    it('Shuld return iterable range of characters', () => {
        const rangeIterator = new Range('a', 'e')
        const range = [...rangeIterator]
        expect(range).toEqual(['a', 'b', 'c', 'd', 'e'])
    })

    it('Shuld return iterable range of characters in a normal order when max and min characters swaped', () => {
        const rangeIterator = new Range('e', 'a')
        const range = [...rangeIterator]
        expect(range).toEqual(['a', 'b', 'c', 'd', 'e'])
    })

    it('Shuld return reversed iterable range of numbers', () => {
        const rangeIterator = new Range(10, 15)
        const range = [...rangeIterator.reverse()]
        
        expect(range).toEqual([15, 14, 13, 12, 11, 10])
    })

    it('Shuld return reversed iterable range of characters', () => {
        const rangeIterator = new Range('a', 'e')
        const range = [...rangeIterator.reverse()]
        expect(range).toEqual(['e', 'd', 'c', 'b', 'a'])
    })

    it('Shuld throw an error when min and max have different types', () => {
        expect(() => new Range('a', 10)).toThrowError()
    })
})