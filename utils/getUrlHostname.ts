export default function getUlrHostname(url) {
    return new URL(url).hostname
}