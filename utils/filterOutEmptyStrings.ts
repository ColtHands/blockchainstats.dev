/**
 * In coingecko API links come as @type {Array<string>}, but some of the string may be empty
 * This function filters out empty string
 * @example filterOutEmptyStrings(["bitcoin.com", "", ""])
 * @param {Array<string>} arr
 * @returns ["bitcoin.com"]
 */
export default function filterOutEmptyStrings(arr: Array<string>): Array<string> {
    return arr.filter(elem => elem !== '' && Boolean(elem))
}
