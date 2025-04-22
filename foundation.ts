export function reverseString(input: string): string {
    if (typeof input !== 'string') {
      throw new TypeError('Expected a string');
    }
  
    return input.split('').reverse().join('');
  }

  export function isPalindrome(input: string): boolean {
    if (typeof input !== 'string') {
      throw new TypeError('Expected a string');
    }
  
    const normalized = input.toLowerCase();
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
  }

  export function countDigits(input: string): number {
    if (typeof input !== 'string') {
      throw new TypeError('Expected a string');
    }
  
    const matches = input.match(/\d/g);
    return matches ? matches.length : 0;
  }

  export function countChar(input: string, charToCount: string): number {
    if (typeof input !== 'string' || typeof charToCount !== 'string') {
      throw new TypeError('Expected string inputs');
    }
  
    if (charToCount.length !== 1) {
      throw new Error('charToCount must be a single character');
    }
  
    return Array.from(input).filter(char => char === charToCount).length;
  }

  //console.log(countChar("hello world", "o")); // 2

  export function findNonMatchingChars(input: string, pattern: RegExp): string {
    if (typeof input !== 'string') {
      throw new TypeError('Expected a string');
    }
  
    return [...input].filter(char => !pattern.test(char)).join('');
  }

//   const result = findNonMatchingChars("abc123xyz", /\d/);
//   console.log(result);

  export function areAnagrams(str1: string, str2: string): boolean {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      throw new TypeError('Both inputs must be strings');
    }
  
    if (str1.length !== str2.length) return false; // Quick check for differing lengths
  
    const frequencyMap: { [key: string]: number } = {};
  
    // Count characters for the first string
    for (let char of str1.toLowerCase()) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
  
    // Subtract counts for the second string
    for (let char of str2.toLowerCase()) {
      if (!frequencyMap[char]) return false;
      frequencyMap[char]--;
    }
  
    // If all counts are 0, the strings are anagrams
    return Object.values(frequencyMap).every(count => count === 0);
  }

//   console.log(areAnagrams("listen", "silent"));
//   console.log(areAnagrams("hello", "world"));

export function countVowelsAndConsonants(input: string): { vowels: number, consonants: number } {
    if (typeof input !== 'string') {
      throw new TypeError('Expected a string');
    }
  
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowels = 0;
    let consonants = 0;
  
    for (let char of input) {
      if (/[a-zA-Z]/.test(char)) {  // Check if it's a letter
        if (vowelsSet.has(char)) {
          vowels++;
        } else {
          consonants++;
        }
      }
    }
  
    return { vowels, consonants };
  }

//   const result = countVowelsAndConsonants("Hello World!");
// console.log(result); // Output: { vowels: 3, consonants: 7 }

function totalMatchingIntegers(arr: number[], target: number): number {
  return arr
    .filter(num => num === target)  // Filter only the matching integers
    .reduce((sum, num) => sum + num, 0);  // Sum them up
}

// 
const array = [1, 2, 3, 4, 2, 5, 2, 6];
const target = 2;
// const total = totalMatchingIntegers(array, target);
// console.log(total); 

function reverseArray(arr: number[]): number[] {  // Function that takes an array and returns a reversed array
  const reversed: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// const arr: number[] = [1, 2, 3, 4, 5];
// const reversedArr: number[] = reverseArray(arr);
// console.log(reversedArr); 


function findMaxWithForLoop(arr: number[]): number {
  let maxElement: number = arr[0];  // Assume the first element is the max initially
  for (let i = 1; i < arr.length; i++) {  // Start loop from the second element
    if (arr[i] > maxElement) {
      maxElement = arr[i];  // Update maxElement if a larger element is found
    }
  }
  return maxElement;
}

// const arr: number[] = [1, 5, 3, 9, 2];
// const maxElement = findMaxWithForLoop(arr);
// console.log(maxElement); 

function sortArrayAscending(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);  // Compare function for ascending order
}

// const arr: number[] = [5, 3, 8, 1, 2];
// const sortedArr = sortArrayAscending(arr);
// console.log(sortedArr);


function sumIntegers(a: number, b: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Both inputs must be integers");
  }
  return a + b;
}

//console.log(sumIntegers(3, 7));  
// ----------------------------------------------------------------------

function average(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot compute average of an empty array");
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// 
// const nums = [10, 20, 30, 40];
// console.log(average(nums)); 

// ----------------------------------------------------------------------


function isEven(num: number): boolean {
  return num % 2 === 0;
}

function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

// 
// console.log(isEven(9)); // true
// console.log(isOdd(7));

// ----------------------------------------------------------------------

class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function findMiddle(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middle = findMiddle(head);
console.log(middle?.value);

// ----------------------------------------------------------------------


  