import { Result } from "./Result"

describe('Testing Result', () => {
    it('Should return value in "then" when there is no error', done => {
        const result = new Result(() => 10)
        result.then((value) => {
            expect(value).toBe(10)
            done()
        })
    })

    it('Should return value in chain of "then" when there is no error', done => {
        const result = new Result(() => 10)
        result.then((value) => {
            expect(value).toBe(10)
            return value
        }).then((value) => {
            expect(value).toBe(10)
            return value
        }).then(value => {
            expect(value).toBe(10)
            done()
        })
    })

    it('Should not call "catch" when there is no error', done => {
        const result = new Result(() => 10)
        let catchWasCalled = false
        result.then((value) => {
            expect(value).toBe(10)
            return value
        }).catch(() => {
            catchWasCalled = true
        })
        .then((value) => {
            expect(value).toBe(10)
            return value
        }).then(value => {
            expect(value).toBe(10)
            expect(catchWasCalled).toBeFalsy()
            done()
        })
    })

    it('Should call catch when error', done => {
        const result = new Result(() => {throw 'error'})

        let thenWasCalled = false
        const notToBeCalledCB = () => {thenWasCalled = true}
        result.then(notToBeCalledCB).catch((error) => {
            expect(error).toBe('error')
            expect(thenWasCalled).toBeFalsy()
            done()
        })
    })
})