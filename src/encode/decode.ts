import { BitAccessor, BitIndex } from "../createBitAccessor/createBitAccessor"
import { BITS_IN_BYTE } from "./helpers"

export function decode(data: Uint8Array, schema: Schema[]) {
    const bitAccessor = new BitAccessor(data)
    const decodedArr: Data[] = []

    let bitIndexCounter = 0

    for (const schemaElement of schema) {
        const curentElementSize = schemaElement[0]
        const currentElementType = schemaElement[1]

        let currentElementBitIndex = 0
        let value = 0
        let ASCIIString = ''

        while(currentElementBitIndex < curentElementSize) {
            const bitIndex = (bitIndexCounter % BITS_IN_BYTE) as BitIndex
            const byteIndex = Math.floor(bitIndexCounter / BITS_IN_BYTE)
            const bitValue = bitAccessor.get(byteIndex, bitIndex)

            if (bitValue) {
                const mask = currentElementType === 'ascii' 
                    ? currentElementBitIndex % BITS_IN_BYTE
                    : currentElementBitIndex

                value = value | bitValue << mask
            }

            bitIndexCounter++
            currentElementBitIndex++

            if (currentElementType === 'ascii' && currentElementBitIndex % BITS_IN_BYTE === 0) {
                ASCIIString += String.fromCharCode(value)
                value = 0
            }
        }

        if (currentElementType === 'ascii') {
            decodedArr.push(ASCIIString)
        }

        if (currentElementType === 'number') {
            decodedArr.push(value)
        }

        if (currentElementType === 'boolean') {
            decodedArr.push(Boolean(value))
        }
    }

    return decodedArr
}