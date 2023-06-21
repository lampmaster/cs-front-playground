import { intoIter } from "../../Iterators/helpers/intoIter";
import { Parser, ParserValue } from "../type";

export function take(condition: RegExp, opt: {min?: number, max?: number} = {min: 0, max: Infinity}): Parser<string, string> {
    return function* (source: string, prev?: ParserValue) {
        const { min, max } = opt
        const sourceIter = intoIter(source)
        let result = ''

        for (const char of sourceIter) {
            const isMatch = condition.test(char)

            if (!isMatch && (result === '' || result.length < min)) {
                throw new Error('Invalid string')
            }

            if (result.length >= max || !isMatch) {
                break
            }
            
            result += char
        }

        const token = {
            type: 'TAKE',
            value: result
        }
        
        return [token, sourceIter]
    }
}