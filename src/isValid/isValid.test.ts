import { isValid } from "./isValid"

describe('Testing isValid', () => {
    it('valid cases', () => {
        const examples = [
            '()',
            '({})',
            '({[][]}[]{})',
            '()(){}[][{{[][]}}]',
            'a[and]b some[value[]]',
            '[ some[value[]]]',
        ]

        for (const example of examples) {
            expect(isValid(example)).toBeTruthy()
        }
    })

    describe('invalid cases', () => {
        it('do not have a pair', () => {
            const examples = [
                '(',
                ')',
                '(})',
                '({[][]{})',
                '()(){}[][{{[][]}}',
                'a[andb some[value[]]',
                '[ some[value[]]',
            ]
    
            for (const example of examples) {
                expect(isValid(example)).toBeFalsy()
            }
        })

        it('parentheses do not match', () => {
            const examples = [
                '(]',
                '({])',
                '({[][]}[]{}]',
                '[]{}(}[}',
                'a[and}b some[value{]]',
                '() some[value[]]}',
            ]
    
            for (const example of examples) {
                expect(isValid(example)).toBeFalsy()
            }
        })
    })
})