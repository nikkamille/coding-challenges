// https://www.hackerrank.com/challenges/ctci-ransom-note/problem

function checkMagazine(magazine, note) {
    let ransom = true;
    let hashMap = {};
    
    for (let word of magazine) {
        hashMap[word] = (hashMap[word] || 0) + 1;
    }
    
    for (let word of note) {
        hashMap[word] = (hashMap[word] || 0) - 1;
    }

    for (let key in hashMap) {
        if (hashMap[key] < 0) {
            ransom = false;
            break;
        }
    }
    
    if (ransom === true) {
        console.log("Yes");
    } else {
        console.log("No")
    }
}