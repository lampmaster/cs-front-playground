import { mapSeq } from "./mapSeq"

describe('Testing mapSeq', () => {
    it('Shuld return empty array when iterable is empty', () => {
        const result = [...mapSeq([], [(el) => el * 2, (el) => el - 1])]
        expect(result).toEqual([])
    })

    it('Shuld return empty array when iterable and iterable with functions are empty', () => {
        const result = [...mapSeq([], [])]
        expect(result).toEqual([])
    })

    it('Shuld not change values in iterable when iterable with functions is empty', () => {
        const result = [...mapSeq([1, 2, 3], [])]
        expect(result).toEqual([1, 2, 3])
    })

    it('Shuld work with array', () => {
        const result = [...mapSeq([1, 2, 3], [(el) => el * 2, (el) => el - 1])]
        expect(result).toEqual([1, 3, 5])
    })

    it('Shuld work with strings', () => {
        const result = [...mapSeq('abc', [(el) => el + '_', (el) => el + 'end'])]
        expect(result).toEqual(['a_end', 'b_end', 'c_end'])
    })
})