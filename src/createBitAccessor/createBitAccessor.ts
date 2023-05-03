export type BitIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
type Bit = 0 | 1

export class BitAccessor {
    #bitArr: Uint8Array

    constructor(bitArr: Uint8Array) {
        this.#bitArr = bitArr
    }

    get(byteIndex: number, bitIndex: BitIndex) {
        const bite = this.#bitArr[byteIndex]
        const mask = 1 << bitIndex
        const bit = (bite & mask) >> bitIndex

        return bit
    }

    set(byteIndex: number, bitIndex: BitIndex, bitToSet: Bit) {
        if (this.get(byteIndex, bitIndex) !== bitToSet){
            const bite = this.#bitArr[byteIndex]
            const mask = 1 << bitIndex

            this.#bitArr[byteIndex] = bite ^ mask
        }
    }
}

export function createBitAccessor(bitArr: Uint8Array): BitAccessor {
    return new BitAccessor(bitArr)
}