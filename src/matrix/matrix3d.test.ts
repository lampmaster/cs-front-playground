import { Matrix3D } from "./matrix3d"

describe('Testing Matrix3D', () => {
    it('Set the size', () => {
        const matrix = new Matrix3D({x: 5, y: 5, z: 5})
        expect(matrix.get({x: 1, y: 1, z: 1})).toBeUndefined()
    })
    
    it('Set values', () => {
        const matrix = new Matrix3D({x: 5, y: 5, z: 5})
        matrix.set({x: 1, y: 1, z: 1}, 100)
        expect(matrix.get({x: 1, y: 1, z: 1})).toBe(100)
    }) 

    it('Set values out of matrix range ', () => {
        const matrix = new Matrix3D({x: 5, y: 5, z: 5})
        console.error = jest.fn()

        matrix.set({x: 6, y: 1, z: 1}, 100)
        expect(console.error).toBeCalledTimes(1)
        expect(matrix.get({x: 6, y: 1, z: 1})).toBeUndefined()

        matrix.set({x: 0, y: 0, z: 0}, 101)
        expect(console.error).toBeCalledTimes(2)
        expect(matrix.get({x: 0, y: 0, z: 0})).toBeUndefined()

        matrix.set({x: -1, y: 0, z: 0}, 105)
        expect(console.error).toBeCalledTimes(3)
        expect(matrix.get({x: -1, y: 0, z: 0})).toBeUndefined()
    }) 
})