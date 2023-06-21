export type TypedArray =
    | Uint8Array
    | Uint16Array
    | Uint32Array
    | Int8Array
    | Int16Array
    | Int32Array

export type TypedArrayConstructor =
    | Uint8ArrayConstructor
    | Uint16ArrayConstructor
    | Uint32ArrayConstructor
    | Int8ArrayConstructor
    | Int16ArrayConstructor
    | Int32ArrayConstructor


export type PredicatFunction<T> = (value?: T, index?: number, arr?: Iterable<T>) => boolean