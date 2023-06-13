import { random } from "../random/random"
import { take } from "../take/take"
import { filter } from "./filter"

describe('Testing filter', () => {
    it('Should get random iterator and return array with 5 random numbers more than 15', () => {
        const length = 5
        const moreThan = 15
        const randomInt = random(10, 20)
        const numberArr = [...take(filter(randomInt, (el) => el > moreThan), length)]

        expect(numberArr.length).toBe(length)
        for (const value of numberArr) {
            expect(value).toBeGreaterThan(moreThan)
        }
    })

    it('Should get array with numbers and return array with 5 number elements more than 10', () => {
        const moreThan = 10
        const numberArray = [1, 2, 4, 5, 11, 20, 30]
        const filteredArray = [...filter(numberArray, (el) => el > moreThan)]
        
        expect(filteredArray).toEqual([11, 20, 30])
    })
}) 