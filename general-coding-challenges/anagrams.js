// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram("", "") true
// validAnagram("aaz", "zza") false
// validAnagram("anagram", "nagaram") true

function validAnagram(str1, str2) {
    // Check the length of both strings. If not equal, retrun false.
    if (str1.length !== str2.length) {
        return false;
    }
    // Create two objects. Loop through each character and count the number of the characters in both strings.
    let stringObj1 = {};
    let stringObj2 = {};

    for (let letter of str1) {
        stringObj1[letter] = (stringObj1[letter] || 0) + 1;
    }

    for (let letter of str2) {
        stringObj2[letter] = (stringObj2[letter] || 0) + 1;
    }

    // console.log(stringObj1);
    // console.log(stringObj2);

    // Compare the keys and values in both objects.
    for (let key in stringObj1) {
        if (!(key in stringObj2)) {
            return false;
        }
        if (stringObj1[key] !== stringObj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram("kuku", "niki")) // false
console.log(validAnagram("ku", "uk")) // true
console.log(validAnagram("", "")) // true
console.log(validAnagram("kamille", "ellimak")) // true
console.log(validAnagram("christian", "christiann")) // false