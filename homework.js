//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function data_type(x){
    if (Object.prototype.toString.call(x) == '[object Object]'){
        for (let i in x){
            data_type(x[i])
        }
    }
    else if (Array.isArray(x)){
        for (let j in x){
            data_type(x[j])
        }
    }
    else{
        console.log(x)
    }
}

data_type(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method

    this.printInfo = () => {
        console.log(`${name} is ${age.toString()} years old.`)
    } 
// Create another arrow function for the addAge method that takes a single parameter
    this.addAge = (num) => {
        age += num
    }
}

let Bob = new Person('Bob', 25)
let Cindy = new Person ('Cindy', 38)
Bob.printInfo()
Cindy.printInfo()
// Adding to the age 
Bob.addAge(3)
Bob.addAge(3)
Bob.printInfo()
Cindy.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isLongString = (string) => {
    return new Promise ((resolve, reject) => {
        if (string.length <= 10) {
            resolve("Small Word")
        } else{
            reject("Big Word")
        }
    }).then ((result) => {
        console.log(result)
    }).catch((reject) => {
        console.log(reject)
    })
}

isLongString("Portion")
isLongString("Archepelego")


// =============Code Wars 1 New ============//
/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/
function solution(a, b){
    if(a.length > b.length) {
      return b + a + b;
    } else {
      return a + b + a;
    }
  }
/*
  Complete the solution so that it reverses the string passed into it.

  'world'  =>  'dlrow'
  'word'   =>  'drow'
*/

function solution(str){
    return str.split('').reverse().join('')
}

function solution(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--){
        newString += str[i];
        return newString
    }
}



// =============Code Wars 2 Already Done ============//
/*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
*/

var number = function(busStops){
    let total = 0;
    for (let i in busStops){
        total += (busStops[i][0] - busStops[i][1])
    }
    return total
  }

console.log(number([[10,0],[3,5],[5,8]]))

// var number = function(busStops){
//     let total = 0;
//     for (let i = 0; i < busStops.length; i++){
//         total += (busStops[i][0] - busStops[i][1])
//     };
//     return total
//   }

