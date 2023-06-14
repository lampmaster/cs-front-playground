import { zip } from "./zip"

describe('Testing zip', () => {
    it('Shuld return empty array when there are no iterables', () => {
        const result = [...zip()]
        expect(result).toEqual([])
    })

    it('Shuld return the same tuple length if all iterables have the same length', () => {
        const result = [...zip([1, 2], 'ab', new Set([3, 4]))]
        expect(result).toEqual([[1, 'a', 3], [2, 'b', 4]])
    })

    it('Shuld work with iterables that have different lengths', () => {
        const result = [...zip([1, 2, 3], 'ab', new Set([3, 4]))]
        expect(result).toEqual([[1, 'a', 3], [2, 'b', 4], [3]])
    })
})