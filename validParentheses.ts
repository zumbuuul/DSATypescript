function isValid(s: string): boolean {
    let stack: string[] = [];
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }
        else if ((s[i] === ')' && stack.pop() !== '(') || (s[i] === ']' && stack.pop() !== '[') || (s[i] === '}' && stack.pop() !== '{')) {
            return false
        }
    }

    if (stack.length !== 0)
        return false

    return true
}

console.log(isValid('([])'));