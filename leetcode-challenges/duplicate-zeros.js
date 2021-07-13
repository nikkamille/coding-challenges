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

ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

console.log(sockMerchant(n, ar))