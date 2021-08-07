// Given a 6x6 2D Array, arr:

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0

// An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:

// a b c
//   d
// e f g

// There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6x6.

// Constraints:
// -9 < arr[i][j] < 9
// 0 < i, j < 5

function hourglassSum(arr) {
    let maxSum = -63

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[0].length - 2; j++) {
            let tempSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            maxSum = Math.max(maxSum, tempSum);
        }
    }
    return maxSum;
}

console.log(hourglassSum([[-9,-9,-9,1,1,1], 
    [0,-9,0,4,3,2],
   [-9,-9,-9,1,2,3],
    [0,0,8,6,6,0],
    [0,0,0,-2,0,0],
    [0,0,1,2,4,0]]))