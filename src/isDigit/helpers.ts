export const FRACTIONAL_RANGE = [8528, 8543]
export const ROMAN_RANGE = [8544, 8575]

export function isInRange(value: number, range: typeof FRACTIONAL_RANGE | typeof ROMAN_RANGE) {
    return range[0] <= value && value <= range[1]
}