import { take } from "./take"

describe('Testing take', () => {
    it('Should find numbers', () => {
        const takeToken = take(/\d/)('12312asdf').next().value[0]
        expect(takeToken.value).toBe('12312')
    })

    it('Should find a string with the length not more than max when max', () => {
        const takeToken = take(/\d/, {max: 10})('12345asdf').next().value[0]
        expect(takeToken.value).toBe('12345')
    })

    it('Should find only length with the length === max', () => {
        const takeToken = take(/\d/, {max: 2})('12345asdf').next().value[0]
        expect(takeToken.value).toBe('12')
    })

    it('Should throw an error', () => {
        expect(() => take(/\d/)('as12312asdf').next()).toThrow()
    })
})