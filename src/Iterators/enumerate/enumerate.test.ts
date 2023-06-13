import { enumerate } from "./enumerate"

describe('Testing enumerate', () => {
    it('Shuld return enumerated number array from number array', () => {
        const numberArr = [10, 20, 30]
        const enumeratedArr = [...enumerate(numberArr)]
        expect(enumeratedArr).toEqual([[0, 10], [1, 20], [2, 30]])
    })

    it('Shuld return enumerated numbers from a Set', () => {
        const set = new Set([10, 20, 30])
        const enumeratedArr = [...enumerate(set)]
        expect(enumeratedArr).toEqual([[0, 10], [1, 20], [2, 30]])
    })

    it('Shuld return enumerated characters from a string', () => {
        const string = 'abcde123'
        const enumeratedArr = [...enumerate(string)]
        expect(enumeratedArr).toEqual([[0, 'a'], [1, 'b'], [2, 'c'], [3, 'd'], [4, 'e'], [5, '1'], [6, '2'], [7, '3']])
    })
})