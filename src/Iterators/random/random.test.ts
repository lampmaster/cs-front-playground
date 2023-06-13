import { random } from "./random"

describe('Testing random', () => {
    it('Positive range', () => {
        const min = 10
        const max = 20
        const randomInt = random(min, max)

        for (let i = 0; i <= 100; i++) {
            const randomValue = randomInt.next().value
            expect(randomValue).toBeGreaterThanOrEqual(min)
            expect(randomValue).toBeLessThanOrEqual(max)
        } 
    })

    it('Negative range', () => {
        const min = -30
        const max = -10
        const randomInt = random(min, max)

        for (let i = 0; i <= 100; i++) {
            const randomValue = randomInt.next().value
            expect(randomValue).toBeGreaterThanOrEqual(min)
            expect(randomValue).toBeLessThanOrEqual(max)
        } 
    })

    it('Min is negative, max is positive', () => {
        const min = -5
        const max = 4
        const randomInt = random(min, max)

        for (let i = 0; i <= 100; i++) {
            const randomValue = randomInt.next().value
            expect(randomValue).toBeGreaterThanOrEqual(min)
            expect(randomValue).toBeLessThanOrEqual(max)
        } 
    })

    it('Upper limit of the range is zero', () => {
        const min = -10
        const max = 0
        const randomInt = random(min, max)

        for (let i = 0; i <= 100; i++) {
            const randomValue = randomInt.next().value
            expect(randomValue).toBeGreaterThanOrEqual(min)
            expect(randomValue).toBeLessThanOrEqual(max)
        } 
    })

    it('The lower limit of the range is zero', () => {
        const min = 0
        const max = 15
        const randomInt = random(min, max)

        for (let i = 0; i <= 100; i++) {
            const randomValue = randomInt.next().value
            expect(randomValue).toBeGreaterThanOrEqual(min)
            expect(randomValue).toBeLessThanOrEqual(max)
        } 
    })

    it('Swap min and max args should work like normal args order', () => {
        const min = 20
        const max = 10
        const randomInt = random(min, max)

        for (let i = 0; i <= 100; i++) {
            const randomValue = randomInt.next().value
            expect(randomValue).toBeGreaterThanOrEqual(max)
            expect(randomValue).toBeLessThanOrEqual(min)
        } 
    })

    it('Should return Iterable Iterator', () => {
        const min = 10
        const max = 20
        const randomInt = random(min, max)[Symbol.iterator]()

        for (let i = 0; i <= 100; i++) {            
            const randomValue = randomInt.next().value
            expect(randomValue).toBeGreaterThanOrEqual(min)
            expect(randomValue).toBeLessThanOrEqual(max)
        } 
    })
})