export function reverseString(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Expected a string');
    }
    return input.split('').reverse().join('');
}
export function isPalindrome(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Expected a string');
    }
    const normalized = input.toLowerCase();
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}
export function countDigits(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Expected a string');
    }
    const matches = input.match(/\d/g);
    return matches ? matches.length : 0;
}
export function countChar(input, charToCount) {
    if (typeof input !== 'string' || typeof charToCount !== 'string') {
        throw new TypeError('Expected string inputs');
    }
    if (charToCount.length !== 1) {
        throw new Error('charToCount must be a single character');
    }
    return Array.from(input).filter(char => char === charToCount).length;
}
//console.log(countChar("hello world", "o")); // 2
export function findNonMatchingChars(input, pattern) {
    if (typeof input !== 'string') {
        throw new TypeError('Expected a string');
    }
    return [...input].filter(char => !pattern.test(char)).join('');
}
//   const result = findNonMatchingChars("abc123xyz", /\d/);
//   console.log(result);
export function areAnagrams(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new TypeError('Both inputs must be strings');
    }
    if (str1.length !== str2.length)
        return false; // Quick check for differing lengths
    const frequencyMap = {};
    // Count characters for the first string
    for (let char of str1.toLowerCase()) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
    // Subtract counts for the second string
    for (let char of str2.toLowerCase()) {
        if (!frequencyMap[char])
            return false;
        frequencyMap[char]--;
    }
    // If all counts are 0, the strings are anagrams
    return Object.values(frequencyMap).every(count => count === 0);
}
//   console.log(areAnagrams("listen", "silent"));
//   console.log(areAnagrams("hello", "world"));
export function countVowelsAndConsonants(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Expected a string');
    }
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowels = 0;
    let consonants = 0;
    for (let char of input) {
        if (/[a-zA-Z]/.test(char)) { // Check if it's a letter
            if (vowelsSet.has(char)) {
                vowels++;
            }
            else {
                consonants++;
            }
        }
    }
    return { vowels, consonants };
}
//   const result = countVowelsAndConsonants("Hello World!");
// console.log(result); // Output: { vowels: 3, consonants: 7 }
function totalMatchingIntegers(arr, target) {
    return arr
        .filter(num => num === target) // Filter only the matching integers
        .reduce((sum, num) => sum + num, 0); // Sum them up
}
// Example usage:
const array = [1, 2, 3, 4, 2, 5, 2, 6];
const target = 2;
const total = totalMatchingIntegers(array, target);
console.log(total);
