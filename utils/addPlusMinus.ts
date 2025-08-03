/**
 * This function and prepends + or - sign in front of a number (converted to string)
 */
export default function addPlusMinus(num: number): string {
    const sign = num > 0 ? '+' : '-'

    return num === 0 ? '0' : `${sign}${Math.abs(num)}`
}
