export default function addPlusMinus(num: number): string | '0' {
    const sign = num > 0 ? '+' : '-'

    return num === 0 ? '0' : `${sign}${Math.abs(num)}`
}