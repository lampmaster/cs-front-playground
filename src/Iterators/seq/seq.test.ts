import { seq } from "./seq"

describe('Testing seq', () => {
    it('No iterables', () => {
        const result = [...seq()]
        expect(result).toEqual([])
    })

    it('One iterable', () => {
        const result = [...seq([1, 2, 3])]
        expect(result).toEqual([1, 2, 3])
    })

    it('Iterables - array, string, Set', () => {
        const result = [...seq([1, 2, 3], 'qwerty', new Set([5]), 'q')]
        expect(result).toEqual([1, 2, 3, 'q', 'w', 'e', 'r', 't', 'y', 5, 'q'])
    })
})