// Create a function that accepts a sorted array of numbers and a target number. The goal is to search the given number in the array and return the index of the number.
// If the number is not in the array, return -1.

function findValue(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let centerIndex = Math.floor((left + right) / 2);

    while (arr[centerIndex] !== num && arr[left] <= arr[right]) {
        if (arr.length === 0) {
            return -1;
        } else if (num < arr[centerIndex]) {
            right = arr[centerIndex - 1];
            centerIndex = Math.floor((left + right) / 2);
        } else {
            left = arr[centerIndex + 1];
            centerIndex = Math.floor((left + right) / 2);
        }
    }
    return arr[centerIndex] === num ? centerIndex : -1;  
}


console.log(findValue([1,2,3,4,5,6,7], 2)) // 1
console.log(findValue([1,2,3,4,5,6,7], 8)) // -1 
console.log(findValue([], 0)) // -1
console.log(findValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 17)) // 16