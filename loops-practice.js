/* Article https://exercism.org/tracks/javascript/concepts/while-loops 
One thing I found helpful in the article about while loops in JS is the explanation of the general syntax. I love that it clearly
explains how the loop executes the code repeatedly as long as a specified condition is true. */ 

/* Article https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet
What I found most helpful in this article is that I was able to download the cheat sheet for reference. 
This will help me until I’m confident in what I’m doing because, while completing other assignments, I often find myself 
going back to what my tutor and I discussed or looking for articles on the web to ensure I’m doing it right. */

/* JavaScript conditional statements and loops - Exercises, Practice, Solution */ 

/* Exercise 1 
Write a JavaScript program that displays the largest integer among two integers. */

    let a=5;
    let b=15;
    if (a >b){
        console.log(a);
    } else 
    {console.log(b);
    }

/* Exercise 2 
Write a JavaScript conditional statement to find the sign of the product of three numbers. 
Display an alert box with the specified sign.*/

let num1 =3, num2 = -7, num3 = 2;
let product = num1 * num2 * num3; 

if (product <0) {
    console.log(`The sign is -`)
}

/* Exercise 3
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.  */


let numbers= [0,-1,4];
numbers.sort(function(a, b) 
{ return b-a;
});
console.log (numbers.join(`,`)) 

/* Exercise 4
Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results. */

let numbs = [10, -5, 23, 7, 15];
let largest = numbs [0];

for (let i = 1; i < numbs.length; i++) {
    if (numbs[i] > largest) {
        largest = numbs[i];
    }
    }
console.log(`The largest number is ${largest}`);

/* Exercise 5 
Write a JavaScript for loop that iterates from 0 to 15. 
For each iteration, it checks if the current number is odd or even, and displays a message on the screen. */

for (let i = 0; i<=15; i++) {
    if (i % 2 === 0) {
        console.log (`${i} is even`);
    }
    else {
        console.log (`${i} is odd`);
    }
}

/* Excercise 6 
Write a JavaScript program that computes the average marks of the following students. 
Then, this average is used to determine the corresponding grade. */

let students = [
{ name: "David", marks: 80 },
{ name: "Vinoth", marks: 77 },
{ name: "Divya", marks: 88 },
{ name: "Ishitha", marks: 95 },
{ name: "Thomas", marks: 68 }
];

let totalMarks = 0;
for (let i = 0; i < students.length; i++) {
totalMarks += students[i].marks;
}

let averageMarks = totalMarks / students.length;
let grade = '';

if (averageMarks < 60) {
    grade = 'F';
} else if (averageMarks < 70) {
    grade = 'D';
} else if (averageMarks < 80) {
    grade = 'C';
} else if (averageMarks < 90) {
    grade = 'B';
} else {
    grade = 'A';
}

console.log(`The average marks are ${averageMarks} and the corresponding grade is ${grade}.`);

/* Exercise 7
Write a JavaScript program that iterates integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". 
For numbers multiples of both three and five print "FizzBuzz". */

for (let i = 1; i <= 100; i++) {
if (i % 3 === 0 && i % 5 === 0) 
{ console.log("FizzBuzz");
} 
else if (i % 3 === 0) 
{ console.log("Fizz");
} else if (i % 5 === 0)
{ console.log("Buzz");
} 
else {
console.log(i);
}
}

/* Exercise 8
According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers. */




/* Excersise 9 
Write a JavaScript program to find the Armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. 
For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. */


/* Exercise 10 
Write a JavaScript program to construct the following pattern, using a nested for loop.*/

let pattern = '';
for (let i = 1; i <= 5; i++) {
for (let j = 0; j < i; j++) {
pattern += '*';
}
pattern += '\n';
}
console.log(pattern);

/* Exercise 11 
Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers. */

function gcd (a, b) 
{ while (b !== 0) 
{ let temp = b;
b = a % b;
a = temp;
}
return a;
}

let nums1 = 56;
let nums2 = 98;
console.log(`The GCD of ${nums1} and ${nums2} is ${gcd(nums1, nums2)}`);

/* Exercise 12 
Write a JavaScript program to sum 3 and 5 multiples under 1000.*/ 

let sum = 0;
for (let i = 1; i < 1000; i++) 
{
if (i % 3 === 0 || i % 5 === 0) 
{
sum += i;
}
}
console.log(`The sum of multiples of 3 and 5 under 1000 is ${sum}`);