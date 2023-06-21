import { intoIter } from "../../Iterators/helpers/intoIter";
import { Parser, ParserResult, ParserState, ParserToken, ParserValue } from "../type";

export function tag(pattern: Iterable<string>): Parser<string, string> {    
    return function* (source: Iterable<string>, prev?: ParserValue) {
        let iter = intoIter(source)
        let value = ''

        for (const test of pattern) {
            let {done, value: char} = iter.next()

            if (done) {
                source = yield ParserState.EXPECT_NEW_INPUT
                iter = intoIter(source)
                char = iter.next().value
            }

            if (test !== char) {
                throw new Error('Invalid string')
            }

            value += char
        }

        const token = {
            type: 'TAG',
            value
        }

        return [token, iter]
    }
}