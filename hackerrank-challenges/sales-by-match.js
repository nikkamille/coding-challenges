// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example:
// n = 7
// ar = [1,2,1,2,1,3,2]

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .


function sockMerchant(n, ar) {
    
    let pairCounter = 0;
    let sockSet = new Set()
    
    ar.forEach (sock => {
        if (sockSet.has(sock)) {
            pairCounter++;
            sockSet.delete(sock);
        } else {
            sockSet.add(sock)
        }
    })
    return pairCounter;
}

n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20] // 3

console.log(sockMerchant(n, ar))