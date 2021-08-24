

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }            
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }   
    }
    return arr;
}

console.log(selectionSort([5,1,3,6,2,1]))
console.log(selectionSort([78,4,101,21,3,95]))
console.log(selectionSort([34,22,10,19,17]))