// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe("fib", () => {
  it("returns an array containing the Fibonacci sequence, the length of the array is the argument value.", () => {
    expect(fib(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fib(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

const fibonacciLength1 = 6;
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10;
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

const fib = (num) => {
  let arr = [];

  if (num > 2) {
    for (let i = 0; i <= num; i++) {
      if (i < 2) {
        arr.push(i);
      } else {
        arr.push(arr[i - 1] + arr[i - 2]);
      }
    }
    arr = arr.slice(1);
    return arr;
  } else {
    alert("Please enter a number greater than 2.");
  }
};

// Pseudo code:

/*
Input: number
Output: array of numbers
*** Steps ***
1. Create function that accepts a number as a parameter
  - Create an empty array in the function.
2. check if number parameter is greater than 2
  - if number parameter IS NOT greater than 2:
    - prompt user
  - if number parameter IS greater than 2:
    ** steps **
      1. iterate the number parameter
        - if index of length of the number parameter is less than 2:
          - push that index into the empty array
        - if index of length of the number parameter is greater than 2:
          - push the [current index minus the 1st index already in the array (the 2nd element behind it)] plus [the current index minus the 2nd index already in the array (the 1st element behind it)].
  3. Cut off the 1st element (index 0) of the array.
  4. Return the array.  
*/

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("sortedValues", () => {
  it("returns an array of the object's (param/arg) values sorted from least to greatest.", () => {
    expect(sortedValues(studyMinutesWeek1)).toEqual([
      15, 15, 20, 30, 30, 60, 90,
    ]);
    expect(sortedValues(studyMinutesWeek2)).toEqual([
      10, 15, 20, 45, 60, 65, 100,
    ]);
  });
});

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60,
};
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65,
};
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

const sortedValues = (obj) => Object.values(obj).sort((a, b) => a - b);

// Pseudo code:

/*
Input: object.
Output: array.
*** Steps ***
  1. Create a function that accepts an object as a parameter.
  2. Target the parameter representing a object values' -> built in class method (Object.values) - returns an array
  3. Sort the the array of values with built in method .sort()
  4. Return the sorted array of object values
*/
