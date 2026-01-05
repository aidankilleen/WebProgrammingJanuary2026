// var keyword is obsolete - use let and const instead
let firstName = "Aidan";
const PI = 3.14; // constant

console.log("is this working?");

// naming convention is lowerCamelCase


// don't use underscores for variable or function names
// use ALLCAPS for constants

// PI = 27;

// strings are very important:

firstName = "Aidan";
firstName = 'Aidan';


let lastName = "O'Sullivan";


console.log(firstName);

let message = 'Press the "red" button';

console.log(message);

message = "line 1 \nline2\nline3";
console.log(message);

// we can create string using ``

message = `
multiline strings using
backtick quotes
`;

console.log(message)
firstName = "Aidan";
message = `Welcome ${firstName}`;
console.log(message);


// Building Block #3 - expressions
// always declare variables
let a = 10;
let b = 20;

let answer = a + b;

console.log(`${a} + ${b} = ${answer}`);
console.log(`${a} + ${b} = ${a+b}`); // you can put an expression in the ${}

let n = parseInt(Math.random() * 100);

console.log(`${n}`);

// building block #4 - conditions

if (n <30) {
	console.log(`${n} is small`);
} else if (n < 70){
	console.log(`${n} is medium`);
} else {
	console.log(`${n} is large`);
}

// ternary operator is used for short conditions

console.log(`${n} is ${n < 30 ? "small" : n<79 ? "medium" : "large"}`);

// bulding block - loops
for (let i=1; i<=10; i++) {
	console.log(i);
}

let i = 1;
while (i<=10) {
	console.log(i++);
}
// js is very performant
n = 1000000;
let total = 0;
for (i=0; i<=n; i++) {
	total += i;
}
console.log(total);

// arrays
let list = [1,6,8,4,2,10,7];


for (i of list) {
	console.log(i);
}

// index starts at 0
console.log(list[0]);

console.log(list.length);

// item 7 is out of bounds!
// NB: this doesn't cause an error!!!!!
console.log(list[list.length]);


// default error is often to continue - which presents challenges in debugging
// unhandled exceptions cause the code to terminate (crash)
// any "red" errors in you web page should be investigated and fixed.


//xxxx();



console.log("finished");


// lists are heterogenous
// items don't need to be the same type
list = [1, "one", 1.1, [1, 2, 3]];



// building block # 7 - functions
// built in functions
// functions from libraries
// write our own functions

function doSomething(a, b) {

	answer = a + b;

	return answer;

}

console.log(doSomething(10, 20));
console.log(doSomething(1, 50));
// NB: functions don't crash if you fail to supply the 
// correct parameters
console.log(doSomething(1));

// arrow syntax for functions
let myfn = (a, b) => {

	let answer = a + b;
	return answer;
}
console.log(myfn(10, 20));



// Building Block # 7 - Objects

let o = {
	name: "My Object", 
	id: 1, 

	address: {
		line1: "Building 6500", 
		line2: "Cork Airport Business Park", 
		city: "Cork",
		county: "Cork", 
		country: "Ireland"
	}, 
	display: () => {
		console.log(`${this.name}`);
	}
}

console.log(o.name);
console.log(o.id);

console.log(o);
console.log(o.address.line1);

o.display();

// you can modify an object after is has been instantiated
o.phone = "+353 21 4621010";


console.log(o);


console.log(o.phone);
// you can reference properties using []
console.log(o["phone"]);


































































