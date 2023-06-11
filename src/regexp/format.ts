export function format(string, obj: Record<string, any>): string {
    return string.replace(/\${(.*?)}/g, (str, key) => {
        const value = obj[key]
        if (value) {
            return value
        }
        return str
    })
}