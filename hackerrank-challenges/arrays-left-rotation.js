function rotLeft(a, d) {
    let counter = d;

    while (counter != 0) {
        let firstElement = a.shift();
        a.push(firstElement);
        counter--;
    }
    return a
}


console.log(rotLeft([1,2,3,4], 1)) // [2,3,4,1]
rotLeft([1,2,3,4,5,6,7], 5) // [6,7,1,2,3,4,5]