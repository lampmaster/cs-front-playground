import { decode } from "./decode"
import { encode } from "./encode"

describe('Testing encode decode functions...', () => {
    it('Should decode all types properly when the same type have the same size', () => {
        const schema: Schema[] = [
            [3, 'number'],
            [3, 'number'],  
            [3, 'number'],
            [1, 'boolean'], 
            [16, 'ascii'],
            [1, 'boolean'],
            [16, 'ascii'],
        ]
        const data: Data[] = [1, 5, 3, true, 'er', false, 'av']

        const encoded = encode(data, schema)
        const decoded = decode(encoded, schema)

        expect(decoded).toEqual(data)
    })

    it('Should decode number whose size === 8', () => {
        const schema: Schema[] = [
            [8, 'number'],
            [8, 'number'],  
            [8, 'number'],
            [8, 'number'],
        ]
        const data: Data[] = [30, 55, 0, 100]

        const encoded = encode(data, schema)
        const decoded = decode(encoded, schema)

        expect(decoded).toEqual(data)
    })

    it('Should decode boolean whose size === 8', () => {
        const schema: Schema[] = [
            [8, 'boolean'],
            [8, 'boolean'],  
            [8, 'boolean'],
            [8, 'boolean'],
        ]
        const data: Data[] = [true, false, false, true]

        const encoded = encode(data, schema)
        const decoded = decode(encoded, schema)

        expect(decoded).toEqual(data)
    })

    it('Should decode ascii whose size === 1024', () => {
        const schema: Schema[] = [
            [1024, 'ascii'],
        ]
        const data: Data[] = ["this is some text just to test decode and encode functions and that's all. Now we add extra symbols *&(!@, and numbers 123456789"]
        const encoded = encode(data, schema)
        const decoded = decode(encoded, schema)

        expect(decoded).toEqual(data)
    })

    it('Should decode data elements with different sizes', () => {
        const schema: Schema[] = [
            [32, 'ascii'],
            [8, 'number'],
            [1, 'boolean'],
            [3, 'number'],
            [16, 'ascii'],
            [8, 'boolean'],
        ]
        const data: Data[] = ['fghj', 125, true, 5, 'er', false]
        const encoded = encode(data, schema)
        const decoded = decode(encoded, schema)

        expect(decoded).toEqual(data)
    })
})