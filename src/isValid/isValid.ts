
const bracketsMap = new Map([['[', ']'], ['{', '}'], ['(', ')']])

export function isValid(string: string) {
    const stack = []

    for (const char of string) {
        switch(char) {
            case '[':
            case '{':
            case '(':
                stack.push(char)
                break
        }

        switch(char) {
            case ']':
            case '}':
            case ')':
                const frontBracket = stack.pop()
                
                if (bracketsMap.get(frontBracket) !== char) {
                    return false
                }
        }
    }

    return stack.length === 0

}