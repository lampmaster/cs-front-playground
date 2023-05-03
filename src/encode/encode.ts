import { BitAccessor, BitIndex } from "../createBitAccessor/createBitAccessor"
import { BITS_IN_BYTE, MAX_BYTE_VALUE, validateData } from "./helpers"

export function encode(data: Data[], schema: Schema[]) {
    let current8bitElement = ''
    const buffer8bitElement: Array<number> = []

    for(let i = 0; i < data.length; i++) {
        const value = data[i]
        const type = typeof value === 'string' ? 'ascii' : typeof value
        const typeFromSchema = schema[i][1]
        const numberOfBites = schema[i][0]

        validateData(data[i], schema[i])

        // encode number
        if (typeof value === 'number') {
            const bitsValue = value.toString(2)
            current8bitElement = bitsValue.padStart(numberOfBites, '0') + current8bitElement
        }

        // encode ascii
        if (typeof value === 'string') {
            for (let strIndex = 0; strIndex < value.length; strIndex++) {
                const charCode = value.charCodeAt(strIndex)
                const bitsValue = charCode.toString(2)
                current8bitElement = bitsValue.padStart(BITS_IN_BYTE, '0') + current8bitElement
            }
        }

        // encode boolean
        if (typeof value === 'boolean') {
            const bit = value === true ? '1' : '0'
            current8bitElement = bit.padStart(numberOfBites, '0') + current8bitElement
        }

        let decimalValue = parseInt(current8bitElement, 2)

        // cut-off extra bits
        while (decimalValue > MAX_BYTE_VALUE) {
            const toBuffer = current8bitElement.slice(-BITS_IN_BYTE)
            current8bitElement = current8bitElement.slice(0, -BITS_IN_BYTE)
            decimalValue = parseInt(current8bitElement, 2)
            
            buffer8bitElement.push(parseInt(toBuffer, 2))
        }
    }

    buffer8bitElement.push(parseInt(current8bitElement, 2))

    return new Uint8Array(buffer8bitElement)
}

