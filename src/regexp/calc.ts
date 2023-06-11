export function calc(str) {
    return str.replace(/[+-]?\(*[+-]?\d[+-/*\d() ]*/g, (str) => Function(`return ${str}`)())
}