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



let arr4 = [1, 2, 3, 4];
console.log(typeof arr4);

let dog = {
    dogName: "ramu",
    age: 3,
    breed: "chihuahu",
    color: "black",
    weight: 2.5
};
console.log(dog);

let myCar = {
    make: "toyato",
    model: "BMW",
    color: "black",
    milage: "15000",
    isElectric: "false",
};
let propertyName = "color";
myCar[propertyName] = "blue";

propertyName = "forSale";
myCar[propertyName] = "true";

console.log("make:", myCar.make);
console.log("model", myCar.model);

console.log("Available for sale??", myCar.forSale);



let people = {
    friends: []
};
let friend1 = {
    firstName: "pavan",
    lastName: "kumar",
    id: 101
};
let friend2 = {
    firstName: "abhi",
    lastName: "shaik",
    id: 102
};
let friend3 = {
    firstName: "sudheer",
    lastName: "kumar",
    id: 103
};

people.friends.push(friend1, friend2, friend3);
console.log(people);


function addNumbers(a, b) {
    return a + b;
};
let num1 = 10;
let num2 = 20;
let result1 = addNumbers(num1, num2);
console.log("First result:", result1);
let result2 = addNumbers(30, 70);
console.log("Second result:", result2);

// let words = ["Amazing", "Brilliant", "Creative", "Dynamic", "Energetic", "Friendly"];
// function describePerson(){
//     let name=prompt("Enter your name:");
//     let randomIndex=Math.floor(Math.random()*words.length);
//     let randomWord=words[randomIndex];
//     console.log(name +"is"+randomWord+"!");
// }
// describePerson();

// arrow function
const arr10 = ["rrgew", "sfdfc", "fwqef", "afew"];
arr10.forEach(e => console.log(e));

// recursive function
let sqaure = (a, b) => a + b;
console.log(sqaure(3, 9));

function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
        getRecursive(--nr);
    }
}
getRecursive(3);

function logRecursive(nr) {
    console.log("started function:", nr);
    if (nr > 0) {
        logRecursive(nr - 1);
    } else {
        console.log("done with recursion");
    }
    console.log("Ended function:", nr);
}
logRecursive(3);

// object
class Person1 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let person = new Person1("maaike", "van putten");
console.log("Hii", people.firstname, people.lastname);


// getters and setters
class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
    get firstname() {
        return this.#firstname;
    }
    set firstname(firstname) {
        this.#firstname = this.firstname;
    }
    get lastname() {
        return this.#firstname = this.firstname;
    }
    set firstname(firstname) {
        this.#firstname = firstname;
    }
}
let p = new Person("maria", "Saga");
console.log(p.firstname);
// Inheritance
class Vechicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}
class Motorcycle extends Vechicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("Driving on one wheel!");
    }
}
let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

// prototype
class Person2 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there!");
    }

}
Person2.prototype.introduce = function () {
    console.log("Hi I'm", this.firstname);
};
Person2.prototype.favoriteColor = "blue";
let pe = new Person2("sudheer", "kumar");
console.log(pe.favoriteColor);
pe.introduce();
pe.greet();

class Menu {
    #item1Price = 100;
    #item2Price = 50;
    constructor(item1Count, item2Count) {
        this.item1Count = item1Count;
        this.item2Count = item2Count;
    }
    #calculateTotal() {
        return (this.item1Count * this.#item1Price) +
         (this.item2Count * this.#item2Price)

    }
    get totalCost(){
        return this.#calculateTotal();
    }
}

let order1 = new Menu(2, 3); 
let order2 = new Menu(1, 5); 
let order3 = new Menu(3, 0); 

console.log("Order 1 Total: ₹" + order1.totalCost);
console.log("Order 2 Total: ₹" + order2.totalCost);
console.log("Order 3 Total: ₹" + order3.totalCost);

// Global Method
let uri= "https://www.example.com/submit?name=maaike van putten";
let encoded_uri=encodeURI(uri);
console.log("Encoded",encoded_uri);
let decoded_uri=decodeURI(encoded_uri);
console.log("decoded",decoded_uri);

let str_int="6";
let int_int=parseInt(str_int);
console.log("Type of",int_int, "is", typeof int_int);


// Array Method
let arr6=["cat", 4, "bag", 90, true];
function printStuff(element,index){
    console.log("Print Stuff:",element, "on array position", index);
}
arr6.forEach(printStuff);


let arr7 = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
 return typeof element === "string";
}
let filterArr = arr7.filter(checkString);
console.log(filterArr)



let arr9=[1, 2, 3, 4]
let mapped_arr=arr9.map(x=>x+1);
console.log(mapped_arr);

let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));





