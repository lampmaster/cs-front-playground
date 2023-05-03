export const MAX_BYTE_VALUE = 255
export const BITS_IN_BYTE = 8
export const validTypeSet = new Set(['number', 'boolean', 'ascii'])

export function validateData(data: Data, schemaValue: Schema) {
    const type = typeof data === 'string' ? 'ascii' : typeof data
    const typeFromSchema = schemaValue[1]

    if (!validTypeSet.has(type)) {
        throw new Error(`Error: type ${type} not allowed`)
    }

    if (type !== typeFromSchema) {
        throw new Error(`Error: type ${type} is not assignable to type ${typeFromSchema} in your schema. Value ${data} is not assignable to schema ${schemaValue[1]}`)
    }
}

function countLeadingZeros(number: number, numberOfBites: number = 32) {
    let zeros = Math.clz32(number) - 32 + numberOfBites
    
    if (zeros < 0) {
        zeros = 0
    }

    return zeros
}