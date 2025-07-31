// Valid ES6+ JavaScript code that should pass linting
const greeting = 'Hello World';
const numbers = [1, 2, 3, 4, 5];

// Arrow functions
const double = (x) => x * 2;
const add = (a, b) => a + b;

// Template literals
const message = `The greeting is: ${greeting}`;

// Destructuring
const { length } = numbers;
const [first, second, ...rest] = numbers;

// Modern features
const processNumbers = (nums) => {
  return nums
    .filter((num) => num > 2)
    .map((num) => double(num))
    .reduce((sum, num) => sum + num, 0);
};

// Classes
class Calculator {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(num) {
    this.value += num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  getValue() {
    return this.value;
  }
}

// Async/await
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

// Modules
export {
  greeting,
  numbers,
  processNumbers,
  Calculator,
  fetchData,
};
