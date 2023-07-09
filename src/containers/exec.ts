export function exec(executer: () => Generator<any, void, any>) {
    const generator = executer()
    let chunk = generator.next()
    
    while (!chunk.done) {
        chunk.value
            .then(value => {
                chunk = generator.next(value)
            })
            .catch(error => {
                chunk = generator.throw(error)
            })
    }
}