// Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

function minimumBribes(q) {
    
    let bribeCounter = 0;
    let n1 = 1;
    let n2 = 2;
    let n3 = 3;

    for (let i = 0; i < q.length; i++) {
        if (q[i] === n1) { // 1,2,3
            n1 = n2;
            n2 = n3;
            n3++;
        } else if (q[i] === n2) { // 2,1,3
            bribeCounter++;
            n2 = n3;
            n3++;
        } else if (q[i] === n3) { // 3,1,2
            bribeCounter += 2;
            n3++;
        } else {
            console.log("Too chaotic");
            return
        }
    }
    console.log(bribeCounter);
    
    // for (let i = 0; i < q.length; i++) {
    //     let difference = q[i] - (i + 1);
    //     if (difference === 1 || difference === 2) {
    //         bribeCounter += difference;
    //     } else if (difference >= 3) {
    //         bribeCounter = "Too chaotic";
    //     }
    // }
    // return bribeCounter;
}

console.log(minimumBribes([2,1,5,3,4])) // 3
console.log(minimumBribes([2,5,1,3,4])) // expected output: "Too chaotic"
console.log(minimumBribes([5,1,2,3,7,8,6,4])) // expected output: "Too chaotic"
console.log(minimumBribes([1,2,5,3,7,8,6,4])) // expected output: 7