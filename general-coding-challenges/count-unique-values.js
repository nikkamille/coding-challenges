// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,2]) // 2
// countUniqueValues([-2,-1,-1,0,1]) // 4
// countUniqueValues([]) // 0

function countUniqueValues(arr) {
    // Define the first pointer.
    let i = 0;
    
    // Check if array is empty. Return 0 if array is empty.
    if (arr.length === 0) {
        return i;
    }

    // Iterate over the array using two pointers to compare each number. The second pointer will start from index 1 and move to the right, comparing the numbers to the first pointer.
    // The first pointer will only move if the number it's being compared to is unique. After it moved to the right, replace the number with the unique number.

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
console.log(countUniqueValues([1,1,2,3,4,4,4,4,5,6,7])) // 7
console.log(countUniqueValues([])) // 0