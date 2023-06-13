import { random } from "../random/random"
import { take } from "./take"

describe('Testing take', () => {
    it('Should take 2 values from array', () => {
        expect([...take([1, 2, 3, 4, 5, 6, 7], 2)]).toEqual([1, 2])
    })

    it('Should take 3 values from Set', () => {
        expect([...take(new Set([1, 2, 3, 4, 5, 6, 7]), 3)]).toEqual([1, 2, 3])
    })

    it('Should take 3 characters from a string', () => {
        expect([...take('abcde', 3)]).toEqual(['a', 'b', 'c'])
    })

    it('Should work with random function iterator', () => {
        const min = 10
        const max = 20
        const takeCount = 4
        const randomArr = [...take(random(min, max), takeCount)]

        expect(randomArr.length).toBe(takeCount)
        for (const value of randomArr) {
            expect(value).toBeGreaterThanOrEqual(min)
            expect(value).toBeLessThanOrEqual(max)
        }
        
    })
})