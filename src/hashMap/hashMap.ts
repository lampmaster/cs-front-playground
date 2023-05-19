import { LinkedList } from "../linkedList/linkedList"

interface Object {
    getHashCode(): number
}

// @ts-ignore
Object.prototype.getHashCode = function(): number {
    if (this.hashCode == null) {
        this.hashCode = Math.floor(Math.random() * (2 ** 32 - 1))
    }

    return this.hashCode
}

const findKeyValue = (keyToFind) => {
    return (keyValue) => {
        if (typeof keyValue.key === 'object' && typeof keyValue === 'object' && keyValue.key !== null) {
            return keyValue.key.getHashCode() === keyToFind.getHashCode()
        }
        return keyValue.key === keyToFind
    }
}

type KeyValue = {
    key: any,
    value: any
}

export class HashMap {
    #buffer: LinkedList<KeyValue>[] | null[]
    #fullness: number = 0

    constructor(copacity: number) {
        this.#buffer = new Array(this.#getClosestPrime(copacity)).fill(null)
    }

    set(key: any, value: any) {
        const index = this.#getIndex(key)
        if (this.#buffer[index] == null) {
            this.#buffer[index] = new LinkedList<KeyValue>()
            this.#fullness += 1
        }

        const keyValue = this.#find(key)
        if (keyValue === undefined) {
            this.#buffer[index].addEnd({key, value})
        } else {
            keyValue.value = value
        }
        
        

        const percentOfFullness = Math.floor(100 * this.#fullness / this.#buffer.length)
        if (percentOfFullness > 75) {
            this.#increaseBufferLength()
        }
    }

    get(key: any): any {
        const keyValue = this.#find(key)
        
        if (keyValue != null) {
            return keyValue.value
        }

        return undefined
    }

    has(key: any) {
        const keyValue = this.#find(key)
        return keyValue !== undefined
    }

    delete(key: any) {
        const index = this.#getIndex(key)
        const keyValue = this.#buffer[index].delete(findKeyValue(key))
        
        if (this.#buffer[index].size === 0) {
            this.#buffer[index] = null
        }
        return keyValue
    }

    #find(key: any): KeyValue | undefined {
        const index = this.#getIndex(key)
        
        if (this.#buffer[index] == null) {
            return undefined
        }

        const keyValue =  this.#buffer[index].find(findKeyValue(key))

        if (keyValue != null) {
            return keyValue
        }

        return undefined
    }

    #getHash(key: any): number {
        if (typeof key === 'number') {
            return key
        }

        if(typeof key === 'boolean') {
            return Number(key)
        }

        if (typeof key === 'string') {
            return this.#stringHashFn(key)
        }

        if(typeof key === 'undefined' || key === null) {
            return 0
        }
        
        return key.getHashCode()
    }

    #stringHashFn(value: string): number {
        let hashValue = 0

        for (let i = 0; i < value.length; i++) {
            const asciiValue = value.charCodeAt(i)
            hashValue = (hashValue * 27 + asciiValue) % this.#buffer.length
        }

        return hashValue
    }

    #getIndex(key: any): number {
        const hash = this.#getHash(key)
        return hash % this.#buffer.length
    }

    #getClosestPrime(value: number): number {
        for (let i = value; true; i++) {
            if (this.#isPrime(i)) {
                return i
            }
        }
    }

    #isPrime(value: number): boolean {
        for(let i = 2; i * i <= value; i++) {
            if (value % i === 0) {
                return false
            }
        }
        
        return true
    }

    #increaseBufferLength() {
        const newBufferCopacity = this.#getClosestPrime(this.#buffer.length * 2)

        const oldBuffer = this.#buffer
        this.#buffer = new Array(newBufferCopacity).fill(null)
        this.#fullness = 0

        for (const bufferCell of oldBuffer) {
            if (bufferCell === null) {
                continue
            }

            let currentListNode = bufferCell.first

            while (currentListNode !== null) {
                const {key, value} = currentListNode.value
                this.set(key, value)
                currentListNode = bufferCell.removeFirst()
            } 
        }          
    }
}