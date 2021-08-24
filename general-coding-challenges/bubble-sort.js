// Bubble Sort Pseudocode
// Start looping from the end of the array with a variable called i towards the beginning.
// Start an inner loop with a variable called j from the beginning until i - 1.
// If arr[j] is greater than arr[j + 1], swap those two values!
// Return the sorted array.

function bubbleSort(arr) {
    
    // NAIVE SOLUTION: Both loop will start from the beginning.
    // for (let i = arr.length; i > 0; i--) {
    //     for (let j = 0; j < i - 1; j++) {
    //         if (arr[j] > arr[j + 1]) {
    //             let temp = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = temp;
    //         }
    //     }
    // }
    // return arr;

    // Optimized with noSwaps (for nearly sorted array to avoid looping unnecessarily).

    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([5,1,3,6,2,1]))
console.log(bubbleSort([78,4,101,21,3,95]))