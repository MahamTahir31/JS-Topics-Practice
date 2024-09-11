// JS is a dynamically types language
// console.log("Maham Tahir")
// name = 'Faiqa';
// age = 21
// price = 3.21
// $x = null
// _y = undefined
// isfollow = false // or true
// console.log(name);
// console.log(age);
// console.log(price);
// console.log($x);
// console.log(_y);
// console.log(false);
// var age = 21;
// var age = 32; // problem of var it can be redeclared
// let age = 10;
// age = 21;
// const a = 21
// a = 32 // error at console window of browser
// console.log(age)
// let age = 31
// console.log(typeof (age))
// let x = BigInt('123')
// console.log(x) // output: 123n
// let y = Symbol("hi!");
// console.log(y) // output: Symbol(hi!)

// CREATING OBJECTS
// const student = {
//     name: "Maham",
//     age: 21,
//     marks: 78,
//     pass: true
// }
// console.log(student)
// console.log(typeof (student)) // output: object
// console.log(student['name']) // output: Maham
// // or
// console.log(student.name) // output: Maham
// student["age"] = student["age"] + 1
// console.log(student["age"])
// student["name"] = "faiqa" // we can update key of object however if object is const
// console.log(student["name"])

// PRACTICE OF DATA TYPES AND VARS

// const profile = {
//     username: "mahamst31",
//     followers: 382,
//     following: 143,
//     posts: 256

// }
// console.log(profile)
// console.log(typeof profile["username"])
// ________________________________________________________________________________

// let a=1, b = 1;
// console.log("a+b = ", a+b)

// let x = 1;
// console.log("x++", x++) // x=1
// // x=2
// console.log("++x", ++x) // x=3

// let a = 5
// let b = "5"
// console.log(a==b) // true
// console.log(a===b) // false

// let num = prompt("enter number");
// if (num % 2 === 0) {
//     console.log(num, " is even")
// } else {
//     console.log(num, " is odd")
// }

// let x = 2;
// if (x < 5) console.log("2 is less than 5");

// let age = 17;
// let result = age >= 18 ? "Adult" : "Not Adult "
// console.log(result)
// or
// let result = age >= 18 ? console.log("Adult" ): console.log("Not Adult ")

// const foo = 0;
// switch (foo) {
//   case -1:
//     console.log("negative 1");
//     break;
//   case 0: // Value of foo matches this criteria; execution starts from here
//     console.log(0);
//   // Forgotten break! Execution falls through
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // Break encountered; will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }
// Logs 0 and 1

// let num = prompt("Enter a number");
// if (num % 5 === 0) {
//     console.log(num, "is multiple of 5");
// }
// else {
//     console.log(num, "is not multiple of 5");
// }

// let score = prompt("Enter Score");
// if (score >= 80 && score <= 100) {
//     console.log("Grade A")
// }
// else if (score >= 70 && score <= 79) {
//     console.log("Grade B")
// }
// else if (score >= 60 && score <= 69) {
//     console.log("Grade C")
// }
// else if (score >= 50 && score <= 59) {
//     console.log("Grade D")
// }
// else {
//     console.log("Grade F")
// }
// calculate sum of 1 to 5
// let sum = 0
// let n = 10
// for (let i = 1; i <= n; i++){
//     sum = sum + i
// }

// console.log("sum =", sum)

// let i = 0
// while (i <= 5) {
//     console.log("i =", i)
//     i++;
// }
// let i =1
// do {
//     console.log("Maham");
//     i++
// } while (i <= 0);

// let size = 0
// str = "World"
// for (let i of str) {
//     console.log("i =", i)
//     size++;
// }
// console.log("String size = ", size)

// let student = {
//         name: "Maham",
//         age: 21,
//         marks: 78,
//         pass: true
// }
// for (let key in student) {
//     console.log("key =", key, "Value = ", student[key]);
// }

// for (let num = 0; num <= 100; num++){
//     if (num % 2 !== 0) {
//         console.log("num =", num)
//     }
// }

//Guess Game
// let RandNum = 10;
// let userNum = prompt("Guess the number: ");
// while (userNum != RandNum) {
//     userNum = prompt("You guessed wrong! Guess again: ");

// }
// console.log("Congratulations! you guessed correct number!")

// let str = "technology";
// console.log(str.length)
// console.log(str[0])

// Template literals
// let obj={
//     item: "pen",
//     price: "20"
// }
// // Template literal
// let output = `The cost of ${obj.item} is ${obj.price}`
// console.log(output)

// Escape Characters
// console.log("Maham\nTahir")
// console.log("Maham\tTahir")
// let a = 'hello\tworld'
// console.log(a.length)

// let a = " EducatioN Hub"
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log(a.trim())

// let str = "hello"
// console.log(str.slice(1, 4))
// let str1 = "Hi "
// let str2 = "Maham"
// console.log(str1.concat(str2))

// let str = "hellololo"
// console.log(str.replace("lo", "p")) // one time replacement
// console.log(str.replaceAll("lo", "p")) // all replacement
// console.log(str.charAt(6))

// prac Ques
// prompt the user to enter his full name. Generate a username for him based on input. Start username with @ followed by his full name and ending with the full name length

// let fullname = prompt("Enter your full name: ");
// let size = fullname.length
// let username = `username for ${fullname} is @${fullname.concat(size)}`
// console.log(username)

// const a = "hi there";

// if (a.includes("there")) {
//   console.log("Found there!");
// } else {
//   console.log("No there here!");
// }
// if (a.startsWith("there")) {
//   console.log("Found there!");
// } else {
//   console.log("No there here!");
// }
// if (a.includes("there")) {
//   console.log("Found there!");
// } else {
//   console.log("No there here!");
// }

// ARRAYS
// let arr = [98, 34, 23];
// console.log(arr[7])
// arr[0] = 100
// console.log(arr[0])


// let colors = ['pink', 'yellow', 'blue', 'red', 'purple', 'black']
// printing elements using for loop
// for (let i = 0; i < colors.length; i++){
//     console.log(colors[i])
// }
// printing elements using for-of loop - efficient way
// for (let color of colors) {
//     console.log(color.toUpperCase())
// }

// prac ques
// calculate average of marks
// let marks = [23, 67, 98, 56, 89, 76]
// let sum = 0
// for (let mark of marks) {
//     sum += mark
// }
// let result = sum / marks.length
// console.log("average marks are : ", result)

// prac ques
// let prices = [200, 100, 300, 400]
// let i = 0;
// for (let price of prices) {
//     console.log(`price before discount: ${price}`)
//     price= price * (10 / 100)
//     prices[i] = prices[i] - price
//     console.log(`price after discount: ${prices[i]}`)
//     i++;
// }

// let fooditems = ["burger", "pizza", "sandwitch", "Fries"]
// console.log(fooditems)
// let pushedVal = fooditems.push("Fried Rice")
// console.log(`After pushing at ${pushedVal}th place fooditems array is ${fooditems}`)
// let poppedVal = fooditems.pop()
// console.log(`after popping ${poppedVal} fooditems array is ${fooditems}`)

// let a = ["w", "o", "r", "l", "d"]
// console.log(a)
// console.log(a.toString())
// let arr1 = ["Hi"]
// let arr2 = ["Maham"]
// console.log(arr1.concat(arr2))
// console.log(fooditems.shift())
// let b = a.slice(1, 4)
// console.log(b)
// console.log(a)
// let c = a.splice(2, 2, "o")
// console.log(a)

// prac Ques
// let companies = ["Google", "Microsoft", "Apple", "IBM", "Systems", "Netflix"]
// console.log(companies)
// companies.shift()
// console.log(companies)
// companies.splice(3, 0, "GSK")
// console.log(companies)
// companies.push("Amazon")
// console.log(companies)