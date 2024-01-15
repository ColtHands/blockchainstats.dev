import getUrlDomainName from '../getUrlDomainName'

describe('getUrlDomainName', () => {
    it('returns a domain name from url', () => {
        expect(getUrlDomainName('https://example.com')).toBe('example.com')
        expect(getUrlDomainName('https://example.com/hello/world')).toBe('example.com')
        expect(getUrlDomainName('https://www.example.com')).toBe('www.example.com')
        expect(getUrlDomainName('https://www.example.com/hello/world?redirect=true')).toBe('www.example.com')
    })

    it('returns itself if url string ins not starting with `http`', () => {
        expect(getUrlDomainName('example.com')).toBe('example.com')
        expect(getUrlDomainName('not even a url')).toBe('not even a url')
    })
})