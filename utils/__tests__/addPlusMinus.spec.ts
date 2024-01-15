import addPlusMinus from '../addPlusMinus'

describe('addPlusMinus', () => {
    it('returns 0 as string when given 0 as number', () => {
        expect(addPlusMinus(0)).toBe('0')
    })

    it('predicates `-` sign when given a negative integer', () => {
        expect(addPlusMinus(-1)).toBe('-1')
        expect(addPlusMinus(-999999)).toBe('-999999')
        expect(addPlusMinus(-9007199254740991)).toBe('-9007199254740991')
    })

    it('predicates `+` sign when given a positive integer', () => {
        expect(addPlusMinus(1)).toBe('+1')
        expect(addPlusMinus(999999)).toBe('+999999')
        expect(addPlusMinus(9007199254740991)).toBe('+9007199254740991')
    })
})