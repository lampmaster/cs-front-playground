export function collapseRecurse(obj: Object, path: string = '', result: Record<string, unknown> = {}): Record<string, unknown> | null {
    if (obj === null && path === '') {
        return null
    }
    
    if (typeof obj !== 'object' || obj === null) {
        result[path] = obj
        return result
    }

    for (const key in obj) {
        const newPath = path === '' ? key : `${path}.${key}`
        collapseRecurse(obj[key], newPath, result)
    }

    return result
}


export function collapseStack(obj: Object): Record<string, unknown> | null {
    if (obj === null) {
        return null
    }

    const stack = []
    const result: Record<string, unknown> = {}

    stack.push(['', obj])

    while (stack.length > 0) {
        const [path, value] = stack.pop()
        
        if (typeof value !== 'object' || value === null) {
            result[path] = value
        } else {
            for (const key in value) {
                const newPath = path === '' ? key : `${path}.${key}`
                stack.push([newPath, value[key]])
            }
        }
    }

    return result
}



