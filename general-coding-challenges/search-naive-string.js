// Naive String Search - lesson from JavaScript Algorithms and Data Structures Masterclass
// Create a function that accepts two strings.
// Pseudocode:
// Loop over the longer string.
// Loop over the shorter string.
// If the characters don't match, break out of the inner loop.
// If the characters do match, keep going.
// If you complete the inner loop and find a match, increment the count of matches.
// Return the count.

function naiveSearchString(long, short) {
    let counter = 0;
    
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            // console.log(short[j], long[i + j])
            if (short[j] !== long[i + j]) {
                // console.log("BREAK!")
                break;                
            }
            if (j === short.length - 1) {
                // console.log("FOUND ONE!")
                counter++;
            }
        }
    }
    return counter;
}

console.log(naiveSearchString('hello world hello world', 'wor')) // 2
console.log(naiveSearchString('kuku loves nikki nikki loves kuku kuku kuku', 'kuku')) // 4
