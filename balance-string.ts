function isBalanced(str: string): boolean {
    const stack: string[] = [];
  
    const openingChars = "({[";
    const closingChars = ")}]";
  
    const matchingPairs: { [key: string]: string } = {
      "(": ")",
      "{": "}",
      "[": "]"
    };
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (openingChars.includes(char)) {
        // Push opening characters onto the stack
        stack.push(char);
      } else if (closingChars.includes(char)) {
        // If there's a closing character, check if it matches the last opened one
        const lastOpened = stack.pop();
  
        if (!lastOpened || matchingPairs[lastOpened] !== char) {
          // If there's no matching opening character or they don't match, the string is unbalanced
          return false;
        }
      }
    }
  
    // If the stack is empty, it means the string is balanced
    return stack.length === 0;
  }
  
  console.log(isBalanced("({[]})")); // true
  console.log(isBalanced("({[})"));  // false
  console.log(isBalanced("(((())))")); // true
  console.log(isBalanced("{[({})]}")); // true
  console.log(isBalanced("[{(}]")); // false
  