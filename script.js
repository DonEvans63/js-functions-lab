// Exercise #1
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// Exercise #2

function isAdult(num) {
    if (num < 18) {
        return 'Minor';
    } else {
        return 'Adult'
    }
}
console.log('Exercise 2 Result', isAdult(17));

// Exercise #3

function isCharAVowel(val) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    val.toLowerCase;
    for (let char of vowels) {
        if (char === val) {
            return true
        } else {
            return false
        }
    }
}
console.log('Exercise 3 Result', isCharAVowel('a'));

// Exercise #4

function generateEmail(name, domain) {
    return `${name}@${domain}`;
}
console.log('Exercise 3 Result', generateEmail('jerrydonevans', 'gmail.com'));

// Exercise #5

function greetUser(name, tod) {
    return `"Good ${tod}, ${name}!"`;
}
console.log('Exercise 3 Result', greetUser('Don', 'afternoon'));

// Exercise #6

function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log('Exercise 3 Result', maxOfThree(120, 47, 90));

// Exercise #7

function calculateTip(total, percent) {
    const tip = total * (percent / 100);
    return tip.toFixed(2);
}
console.log('Exercise 3 Result', calculateTip(118.37, 15));

// Exercise #8

function convertTemperature(temp, degree) {
    if (degree === 'C') {
        return temp * (9 / 5) + 32
    } else {
        return (temp - 32) * 5 / 9
    }
}
console.log('Exercise 3 Result', convertTemperature(32, 'C'));

// Exercise #9

function basicCalculator(a, b, opp) {
    if (opp === 'divide') {
        return a/b
    } else if(opp === 'multiply') {
        return a*b;
    } else if(opp === 'add') {
       return a+b;
    } else {
        return a-b
    }
}
console.log('Exercise 3 Result', basicCalculator(25, 5, 'divide'));

// Exercise #10

function calculateGrade(num) {
    if(num >= 90 && num <= 100) {
        return 'A';
    } else if(num >= 80 && num < 90) {
        return 'B';
    } else if(num >= 70 && num < 80) {
        return 'C';
    } else if(num >= 60 && num < 70) {
        return 'D';
    } else {
        return 'F'
    }
}
console.log('Exercise 3 Result', calculateGrade(53));

// Exercise #11

function createUserName(first, last) {
    const start = first.slice(0,3);
    const end = last.slice(0,3);
    return `${start}${end}`
}
console.log('Exercise 3 Result', createUserName('Johnny', 'Howe'));

// Exercise #12

const sum = (...args) => {
    let total = 0;
    for(let i = 0; i < args.length; i++) {
       total += args[i];
    }
    return total;
  }
  console.log('Exercise 12 Result',sum(2, 4, 6, 9, 27, 103));