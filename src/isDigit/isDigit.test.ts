import { isDigit } from "./isDigit"

describe('Testing isDigit', () => {
    it('Empty string', () => {
        expect(isDigit('')).toBeFalsy()
    })

    it('Not digits', () => {
        expect(isDigit('asdf')).toBeFalsy()
        expect(isDigit('123fasd1')).toBeFalsy()
        expect(isDigit('one')).toBeFalsy()
        expect(isDigit('🤗')).toBeFalsy()
    })

    it('Different digits', () => {
        expect(isDigit('Ⅰ1')).toBeFalsy()
        expect(isDigit('⅑Ⅻ')).toBeFalsy()
        expect(isDigit('2⅜')).toBeFalsy()

    })

    it('Usual digits', () => {
        expect(isDigit('123')).toBeTruthy()
        expect(isDigit('0')).toBeTruthy()
        expect(isDigit('1000')).toBeTruthy()
        expect(isDigit('-1000')).toBeTruthy()
    })

    it('Roman digits', () => {
        expect(isDigit('Ⅰ')).toBeTruthy()
        expect(isDigit('ⅠⅤ')).toBeTruthy()
        expect(isDigit('ⅠⅠⅠ')).toBeTruthy()
        expect(isDigit('Ⅻ')).toBeTruthy()
    })

    it('Fractional digits', () => {
        expect(isDigit('⅑')).toBeTruthy()
        expect(isDigit('⅝')).toBeTruthy()
        expect(isDigit('⅜')).toBeTruthy()
        expect(isDigit('⅜⅝')).toBeTruthy()
    })
})