export default function getUrlDomainName(url: string) {
    const hostname = new URL(url).hostname
    // return hostname.startsWith('www.') ? hostname.substring(4, hostname.length - 1) : hostname
    return hostname
}
