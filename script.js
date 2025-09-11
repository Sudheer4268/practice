console.log("Hello, JavaScript is working 🚀");

let arr = [1, 20];
console.log(arr + 1);

{
    let arr = [2, 4] - 1;
    console.log(arr);
}

console.log([7, 2] * 2)

function greet(name) {
    return ("Hello " + name + "!");
}
console.log(greet("sudheer kumar"));


function add(a, b) {
    return (a * b);
}
console.log(add(6, 8));


for (let i = 0; i < 10; i++) {
    console.log(i);
}


let arr1 = [];
for (let i = 0; i < 100; i++) {
    console.log(arr1);
    arr1.push(i);
}

let arr2 = [];
for (let i = 0; i < 100; i = i + 2) {
    console.log(arr2);
    arr2.push(i);
}


let myWork = [];
for (let i = 0; i < 10; i++) {
    let status = (i % 2 === 0);
    let lesson = {
        name: `Lesson${i}`,
        status: status
    };
    myWork.push(lesson);
}
console.log(myWork);


let i = 0;
while (i < 5) {
    i++;
    console.log(i)
}

let arrOfArray = [];
for (i = 0; i < 3; i++) {
    arrOfArray.push([]);
    for (j = 0; j < 7; j++) {
        arrOfArray[i].push(j);
        console.log(arrOfArray);

    }
}
let arr5 = [1, 20];
console.log(arr5 + 2);

let nr1 = 1;
let nr2 = 2;
let temp;
fibonacciArray = [];

while (fibonacciArray.length < 25) {
    fibonacciArray.push(nr2);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
}
console.log(fibonacciArray);

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
    if (someArray[0] === "Emir") {
        console.log("Found her!");
        notFound = false;
    } else {
        someArray.shift();
    }
}


let x=3.6;
Math.floor(x);
console.log(math);
