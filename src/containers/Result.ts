export class Result<T> {
    #state: 'Ok' | 'Err'
    #error: any
    #result: T | null = null
    
    constructor(fn: () => T) {
        try {
            this.#result = fn()
            this.#state = 'Ok'
        } catch(error) {
            this.#error = error
            this.#state = 'Err'
        }
    }

    then(cb: (value: T) => T | void) {
        if (this.#state === 'Ok') {
            return new Result(() => cb(this.#result))
        }

        return this
    }

    catch(cb: (error: any) => any) {
        if (this.#state === 'Err') {
            return new Result(() => cb(this.#error))
        }

        return this
    }
}