import { format } from "./format"

it('Only latin letters, digits, "_" and "$"', () => {
    const regExp = /^[A-z\d$]+$/
    expect('привет!').not.toMatch(regExp)
    expect('привет!asdf$').not.toMatch(regExp)
    expect('фываasdfa$_').not.toMatch(regExp)
    expect('asdfasd$_').toMatch(regExp)
})

it('Should return array with only first number in every "digits;" pattern', () => {
    const regExp = /,[\d]+,[\d]+;/g
    const resultArr = '762120,0,22;763827,0,50;750842,0,36;749909,0,95;755884,0,41;'.split(regExp).filter(Boolean)
    expect(resultArr).toEqual(['762120', '763827', '750842', '749909', '755884'])
})

describe('Testing format', () => {
    it('Should replace template ${key} by value from an object', () => {
        const result = format('Hello, ${user}! Your age is ${age}.', {user: 'Bob', age: 10})
        expect(result).toBe('Hello, Bob! Your age is 10.')
    })

    it('Should return the same value if there is no key in the object', () => {
        const result = format('Hello, ${user}! Your age is ${age}.', { age: 10})
        expect(result).toBe('Hello, ${user}! Your age is 10.')
    })
})
