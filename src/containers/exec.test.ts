import { Result } from "./Result";
import { exec } from "./exec";

describe('Testing exec', () => {
    let result1
    let result2
    let error

    exec(function* main() {
        result1 = yield new Result(() => 10);
        result2 = yield new Result(() => 'some value');
        
        try {
            yield new Result(() => { throw 'Boom!'; });
        } catch (err) {
            error = err
        }
    });

    it('Should return the first result', () => {
        expect(result1).toBe(10)
    })

    it('Should return the second result', () => {
        expect(result2).toBe('some value')
    })

    it('Should return an error', () => {
        expect(error).toBe('Boom!')
    })
})