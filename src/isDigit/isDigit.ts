import { FRACTIONAL_RANGE, ROMAN_RANGE, isInRange } from "./helpers"
import { RANGE_STATE } from "./type"

export function isDigit(value: string): boolean {
    if (value.length === 0) {
        return false
    }

    if (!isNaN(Number(value))) {
        return true
    }

    let currentRangeState = RANGE_STATE.NOT_DEFINED

    for (const valueItem of value) {
        if (valueItem.length > 1) {
            return false
        }
        
        const currentValueCodePoint = valueItem.codePointAt(0)

        switch (currentRangeState) {
            case RANGE_STATE.NOT_DEFINED: {
                if (isInRange(currentValueCodePoint, ROMAN_RANGE)) {
                    currentRangeState = RANGE_STATE.ROMAN
                    break
                }

                if (isInRange(currentValueCodePoint, FRACTIONAL_RANGE)) {
                    currentRangeState = RANGE_STATE.FRACTIONAL
                    break
                }

                return false
            }

            case RANGE_STATE.ROMAN:
                if (isInRange(currentValueCodePoint, ROMAN_RANGE)) {
                    break
                }

                return false
            case RANGE_STATE.FRACTIONAL:
                if (isInRange(currentValueCodePoint, FRACTIONAL_RANGE)) {
                    break
                }

                return false
            default:
                return false
        }        
    }

    return true
}