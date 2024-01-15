import filterOutEmptyStrings from '../filterOutEmptyStrings'

describe('filterOutEmptyStrings', () => {
    it('filters out falsy values from an array', () => {
        const array = ['Hello', 'world', '']
        const arrayFiltered = filterOutEmptyStrings(array)

        expect(arrayFiltered).toHaveLength(2)
        expect(arrayFiltered).toEqual(expect.not.arrayContaining(['']))
        expect(arrayFiltered).toEqual(['Hello', 'world'])
    })
})