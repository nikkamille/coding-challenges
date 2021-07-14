// There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first  letters of the infinite string.

// Example: 
// s = "abcac"
// n = 10

// repeatedString("abcac", 10) // 4

function repeatedString(s, n) {
    let a = 0;
    const l = s.length;

    if (n >= l) {
        for (const letter of s) {
            if (letter === "a") {
                a++;
            }
        }
        a *= Math.floor(n/l);
    }

    for (let i = 0; i < n % l; i++) {
        if (s[i] === "a") {
            a++;
        }
    }
 
    return a;
    
}

console.log(repeatedString("aba", 10)) // 7
console.log(repeatedString("abcac", 10)) // 4
console.log(repeatedString("a", 1000)) // 4
