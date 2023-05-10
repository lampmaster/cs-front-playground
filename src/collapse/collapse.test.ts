import { collapse } from "./collapse"

describe('Testing collapse', () => {
    describe('should flat object with one level', () => {
        it('Should work with numbers', () => {
            const examples = [
                {test: {a: 1}, result: '{a: 1}'},
                {test: {key1: 10, key2: 20}, result: '{key1: 10, key2: 20}'},
            ]
            for (const example of examples) {
                expect(collapse(example.test)).toBe(example.result)
            }
        })
        it('Should work with arrays', () => {
            const examples = [
                {test: {a: [10, 20, 30]}, result: '{a.0: 10, a.1: 20, a.2: 30}'},
                {test: {a: [10, 20], b: [50, 30]}, result: '{a.0: 10, a.1: 20, b.0: 50, b.1: 30}'},
            ]

            for (const example of examples) {
                expect(collapse(example.test)).toBe(example.result)
            }
        })
        it('Should work with strings', () => {
            const examples = [
                {test: {a: 'qwerty'}, result: "{a: qwerty}"},
                {test: {a: 'qwerty', b: '12345'}, result: '{a: qwerty, b: 12345}'},
                {test: {a: ['rtyu', 'some text'], b: ['50', 'rtyu']}, result: '{a.0: rtyu, a.1: some text, b.0: 50, b.1: rtyu}'},
            ]

            for (const example of examples) {
                expect(collapse(example.test)).toBe(example.result)
            }
        })
    })

    describe('should flat object with more than one depth level', () => {
        it('Should work with numbers', () => {
            const examples = [
                {test: {a: {b: 1}}, result: '{a.b: 1}'},
                {test: {key1: {key3: 10}, key2: 20}, result: '{key1.key3: 10, key2: 20}'},
                {test: {key1: {key3: 10, key4: 30}, key2: {key5: {key6: 100}, key7: 10}}, result: '{key1.key3: 10, key1.key4: 30, key2.key5.key6: 100, key2.key7: 10}'},
            ]
            for (const example of examples) {
                expect(collapse(example.test)).toBe(example.result)
            }
        })
        it('Should work with arrays', () => {
            const examples = [
                {test: {a: [{b: 10}, {c: {d: 20}, e: 40}, 30]}, result: '{a.0.b: 10, a.1.c.d: 20, a.1.e: 40, a.2: 30}'},
                {test: {a: {c: [10, 20]}, b: {d: [50, 20], e: {j: ['qwerty', 20]}}}, result: '{a.c.0: 10, a.c.1: 20, b.d.0: 50, b.d.1: 20, e.j.0: qwerty, e.j.1: 20}'},
            ]

            for (const example of examples) {
                expect(collapse(example.test)).toBe(example.result)
            }
        })
        it('Should work with strings', () => {
            const examples = [
                {test: {a: {b: 'qwerty', c: 'rtyu'}}, result: "{a.b: qwerty, a.c: rtyu}"},
                {test: {a: 'qwerty', b: '12345', c: {d: {j: 'rtyu', t: 'text'}, e: 'some'}}, result: '{a: qwerty, b: 12345, c.d.j: rtyu, c.d.t: text, c.e: some}'},
            ]

            for (const example of examples) {
                expect(collapse(example.test)).toBe(example.result)
            }
        })
    })
}) 