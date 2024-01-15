export default function getUrlDomainName(url: string) {
    if(url.startsWith('http')) {
        return new URL(url).hostname
    } else {
        return url
    }
}
