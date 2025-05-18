function longestPalindrome(s: string): number {
    let hash: Map<string, number> = new Map()
    let count = 0
    let odd = false
    for (let i = 0; i < s.length; i++) {
        if (!hash.has(s[i])) {
            hash.set(s[i], 1)
        }
        else {
            hash.set(s[i], (hash.get(s[i]) || 1) + 1)
        }
    }

    hash.forEach((value, key) => {


        if ((hash.get(key) || 1) % 2 == 0) {
            count += hash.get(key) || 1
        }
        else {


            count += (hash.get(key) || 1) - 1
            odd = true
        }
    })
    if (odd) count++

    return count
}

console.log(longestPalindrome('abb'))