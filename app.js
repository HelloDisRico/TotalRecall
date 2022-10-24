// STRINGS 
let firstVariable = "Hello World";
let secondVarible = undefined;
let yourName = "Kevin"
firstVariable = 2;
secondVarible = firstVariable;
secondVarible = "Hello";

let output = `Hello, my name is ${yourName}.`;
console.log(output);

//BOOLEANS
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';


console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name'); // Does this string equal this string?

console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false && false)
console.log(e && 'Kevin');
console.log(a || b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)`
console.log(a && a || d); // note: the answer is a simple arithmetic equation, not something "weird"`
console.log(48 || '48');
/*
//the Farm
let animal = prompt("Name an Animal");
if (animal != "Cow") {
    console.log("We dont know this animal.Try Cow.")
}else if (animal === "Cow") {
        console.log("mooooooooooo")
    }


*/
//Driver's Ed
//let currentAge;

//currentAge = prompt("What is your current age")
//if(currentAge >= 16){
//    console.log("Here are your keys!")
//} else if(currentAge<16) {
//    console.log("No")
//}



//LOOPS

//for(let i1 = 0; i1 <=10;i1++) {
 //16   console.log(i1);
//}

//for(let i = 10; i <=400;i++);
//for(let i = 12; i<=4000;i+3); {
   // console.log(i);
//}
//for(let i = 0; i <= 100; i++) {
   // if(i % 2 ==0) {
    //    console.log(`${i} is an even number`)
    
    //if(!(i > 0 && i % 5)) {
     //   console.log(`I found a ${i} high five`)
    //}
    
//15
//}

//The Basics



//Get Even

//Give Me 5

//Savings Account
//let bankAccount = 0;
//let totalBalance = [1,2,3,4,5,6,7,8,9,10]

//totalBalance.forEach(element => {
  //  bankAccount += element
//});
//console.log(bankAccount)

//let bankAccount2 = 0;
//for(i = 0; i<=10; i++){
  //  bankAccount2 += i;
   //// console.log(bankAccount2)
//}
//let bankAccount3 = 0;
//for(i = 0: i >100; i++) {
  //  bankAccount3 += i * 2
//}


//ARRAYS & CONTROL FLOW
// quotes = ['Your killing me smalls','Dont get high on your own supply'' You vs You']



// const myArray  = [5,10,15,500,20]
// myArray.push('Aegon')('Testing')
// myArray.shift(myArray)
// myArray.unshift('Bob Marley')
// myArray.pop()
// myArray.reverse();
// console.log(myArray)

///////////////////////////////////////////////////////////////////////////////
// F. Biggie Smalls

/*
let num = 6

if(num < 100){
  console.log("little number")
}
else if(num > 100){
  console.log("big number")
}

// G. Monkey in the middle

let num = 6
if(num < 5){
  console.log("Little number")
} else if (num > 10){
  console.log("Big number")
}else(console.log("monkey"))
*/ 
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "stained knit hat",
  "raybans",
  "marshmallow peeps"
];


const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "Footie Pajamas"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 1.
console.log("Kristyn is rocking that "+ (kristynsCloset[2]) + " today")
// 2. Done
// 3.
//thomsCloset[0] [0]
//thomsCloset[1][1]
//thomsCloset[2][2]

console.log("Thom is wearing a "+ thomsCloset[0][2] +", " + thomsCloset[1][2] +", and " + thomsCloset[2][2])
/////////////////////////////
//Functions
function greet(name){
  console.log(name + " is cool");
}
greet("Kevin");

//C.

function calculateCube(x){
 console.log(x*x*x)
}
calculateCube(5)

//D.
/*
function isVowel(argument){

  let vowels = ["a","e","i","o","u",]
  
  for(let i = 0; i < vowels.length; i++){
    if(argument === vowels[i]) {
      
    } 
    return true;
    }
    return false;
  }

  console.log(isVowel["a"]);
*/ // Get two length
function gettwoLength(str1,str2,) {
  return[str1.length, str2.length];
}

function getMultipleLength(strings){
  const output = [];
  for(let string of string){
    output.push(string.length);
  
  } return output;
}

function maxOfThree(a, b, c) {
  if((a >= b) && (b >= c)) {
    return b;
  } else {
      return c;
    }
  }
