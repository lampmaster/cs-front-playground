import { Coordinates } from "./types"

export class Matrix3D {
    #matrix = []

    #xSize: number
    #ySize: number
    #zSize: number

    constructor(coordinates: Coordinates) {
        this.#xSize = coordinates.x
        this.#ySize = coordinates.y
        this.#zSize = coordinates.z

        this.#matrix = new Array(this.#xSize * this.#ySize * this.#zSize)
    }

    set(coordinates: Coordinates, value: number) {
        const index = this.#getIndex(coordinates)
        if (index === undefined) {
            console.error("Can't set value. Coordinates are out of the matrix range")
        }
        this.#matrix[this.#getIndex(coordinates)] = value
    }

    get(coordinates: Coordinates) {
        const index = this.#getIndex(coordinates)
        if (index === undefined) {
            return undefined
        }
        return this.#matrix[index]
    }

    #getIndex(coordinates: Coordinates): number {
        if (this.#isOutOfMatrixRange(coordinates)) {
            return undefined
        }
        // for user matrix start from 1, but in the matrix array first element is 0
        const x = coordinates.x - 1,
              y = coordinates.y - 1,
              z = coordinates.z - 1

        return (z * this.#ySize + y) * this.#xSize + x
    }

    #isOutOfMatrixRange(coordinates: Coordinates) {
        return coordinates.x > this.#xSize 
                || coordinates.y > this.#ySize
                || coordinates.z > this.#zSize
                || coordinates.x < 1
                || coordinates.y < 1
                || coordinates.z < 1
    }
}