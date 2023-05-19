import { HashMap } from "./hashMap"

describe('Testing HashMap', () => {
    it('Set primitive keys', () => {
        const hashMap = new HashMap(1)
        hashMap.set(1, 10)
        hashMap.set(6, 10)
        hashMap.set(7, 10)
        hashMap.set('key', 20)
        hashMap.set('12', 50)
        hashMap.set(null, 50)
        hashMap.set(true, 50)
        hashMap.set(undefined, 50)
        hashMap.set('aaaa', 20)
        hashMap.set('aa', 50)

        expect(hashMap.get(1)).toBe(10)
        expect(hashMap.get(6)).toBe(10)
        expect(hashMap.get(7)).toBe(10)
        expect(hashMap.get('key')).toBe(20)
        expect(hashMap.get('12')).toBe(50)
        expect(hashMap.get(null)).toBe(50)
        expect(hashMap.get(true)).toBe(50)
        expect(hashMap.get(undefined)).toBe(50)
        expect(hashMap.get('aaaa')).toBe(20)
        expect(hashMap.get('aa')).toBe(50)

    }) 

    it('Set object keys', () => {
        const hashMap = new HashMap(10)
        const objectKey = {}
        const mapKey = new Map()
        const arrKey = []

        hashMap.set(objectKey, 10)
        hashMap.set(mapKey, 20)
        hashMap.set(arrKey, 50)

        expect(hashMap.get(objectKey)).toBe(10)
        expect(hashMap.get(mapKey)).toBe(20)
        expect(hashMap.get(arrKey)).toBe(50)
        expect(hashMap.get({})).toBeUndefined()
    }) 

    it('Check if key is exist', () => {
        const hashMap = new HashMap(10)
        hashMap.set(1, 'some value')

        expect(hashMap.has(1)).toBeTruthy()
        expect(hashMap.has(2)).toBeFalsy()
        expect(hashMap.has(3)).toBeFalsy()
    }) 

    it('Set the same key', () => {
        const hashMap = new HashMap(10)
        hashMap.set(3, 'a')
        hashMap.set(2, 'b')
        hashMap.set(1, 'some value')
        expect(hashMap.get(1)).toBe('some value')
        hashMap.set(1, 'another value')
        expect(hashMap.get(1)).toBe('another value')
    }) 

    it('Delete key value', () => {
        const hashMap = new HashMap(1)
        hashMap.set(1, 'some value')
        expect(hashMap.get(1)).toBe('some value')
        hashMap.delete(1)
        hashMap.set('11', 'some value2')
        expect(hashMap.get('11')).toBe('some value2')
        expect(hashMap.get(1)).toBeUndefined()
        expect(hashMap.has(1)).toBeFalsy()
        expect(hashMap.get('11')).toBe('some value2')
    }) 
})