
const bracketsMap = new Map([['[', ']'], ['{', '}'], ['(', ')']])

export function isValid(string: string) {
    const stack = []
    const isStackEmpty = () => stack.length === 0

    for (const char of string) {
        switch(char) {
            case '[':
            case '{':
            case '(':
                stack.push(char)
                break
            case ']':
            case '}':
            case ')':
                if (isStackEmpty()) {
                    return false
                }

                const frontBracket = stack.pop()
                
                if (bracketsMap.get(frontBracket) !== char) {
                    return false
                }
        }
    }

    return isStackEmpty()

}