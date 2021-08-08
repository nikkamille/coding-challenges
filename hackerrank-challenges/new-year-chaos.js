function minimumBribes(q) {
    
    let bribeCounter = 0;
    
    for (let i = 0; i < q.length; i++) {
        let difference = q[i] - (i + 1);
        if (difference === 1 || difference === 2) {
            bribeCounter += difference;
        } else if (difference >= 3) {
            bribeCounter = "Too chaotic";
        }
    }
    return bribeCounter;
}

console.log(minimumBribes([2,1,5,3,4]))
console.log(minimumBribes([2,5,1,3,4]))
console.log(minimumBribes([1,2,5,3,4,7,8,6]))