export {}

declare global {
    type Nullish<T> = T | null | undefined
    type Nullable<T> = T | null
}