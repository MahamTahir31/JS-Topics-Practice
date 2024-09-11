//Functions
// function myfunc(msg) {
//     console.log(msg);
// }
// myfunc(); // Output: undefined
// myfunc("Good effort!")

// function sum(a, b) {
//     res = a + b
//     return res
// }
// let x = 10
// let y = 11
// let val = sum(x, y)
// console.log(`sum of ${x} and ${y} is ${val}`)

// // Arrow functions
// const arrowSum = (a, b) => {
//     console.log(`sum of ${a} and ${b} = ${a + b}`);
// };

// arrowSum(4, 2);

// const printhello = () => console.log("hello!");
// printhello();

// Prac Ques
// function CountVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }
// let str = "education"
// let res = CountVowels(str);
// console.log(`number of vowels in ${str} are: ${res}`);

// let CountVowelsArrow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(`Number of Vowels in the word ${str} using arrow function = ${CountVowelsArrow(str)} `)

// For Each Loop
// let arr = [1, 2, 4, 5]
// arr.forEach(function Func(val) {
//     console.log(val)
// })

// or using arrow func
// arr.forEach((val, idx, arr) => {
//     console.log(val, idx, arr)
// })

// Prac Ques
// let array = [1, 2, 3, 4]
// array.forEach((val) => {
//     console.log(val**2)
// })

// or
// let calSquare = (val) => {
//     console.log(val**2)
// }
// array.forEach(calSquare);

// Map method
// let newArr=array.map((val) => {
//     return val**2
// })
// console.log(newArr)
// Map method
// let newArr=array.filter((val) => {
//     return val % 2 == 0;
// })
// console.log(newArr)

// Reduce method
// let output = array.reduce((prev, curr) => {
//     return prev + curr;
// })

// console.log(`sum of all values of array = ${output}`)

// // to find largest element from array
// let maxNum = array.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log(`max number from the array ${array} is: ${maxNum}`);

// prac Ques
// let marks = [32, 43, 90, 93, 76, 94, 98]
// let students = marks.filter((mark) => {
//     return mark > 90;
// })
// console.log(`90+ marks of students: ${students} `);

// prac Ques
// let n = prompt("Enter size of array");
// let arr = []
// for (let i = 1; i <= n; i++){
//     arr[i-1] = i;
// }
// console.log(`Array is: ${arr}`)
// let sum = arr.reduce((prev, curr) => {
//     return prev + curr;
// })
// console.log(`Sum of all elements of array is: ${sum}`)
// let factorial = arr.reduce((prev, curr) => {
//     return prev * curr;
// })
// console.log(`Product of all elements of array is: ${factorial}`)

// DOM
// window.alert("Hi");
// window.console.log("Welcome!")
// console.dir(window.document)
// console.dir(document.body)
// console.dir(document.body.childNodes[1])

// let heading = document.getElementById("heading");
// console.dir(heading)
// let box = document.getElementsByClassName("container")
// let para = document.getElementsByTagName("p")
// let FirstPara = document.querySelector("p")
// let allPara = document.querySelectorAll("p")
// DOM properties
// console.log(heading.tagName)
// let div = document.querySelector("div")
// let list = document.querySelector("ul")
// console.log(list.innerText)
// console.log(div.innerHTML)
// heading.innerText = "Welcome to the Hub";

// Prac Ques-1
// let head2 = document.querySelector("h2")
// let str = " I wanna play with you!";
// head2.innerText = head2.innerText + str;
// Prac Ques-2
// let divs = document.querySelectorAll(".sameDivs");
// let str = " are you?";
// for (let div of divs) {
//     div.innerText = div.innerText + str;
// }

// let heading = document.querySelector("h1")
// let attrValue = heading.getAttribute("name")
// console.log(attrValue)
// console.log(heading.setAttribute("name", "headingAttr"))

// heading.style.backgroundColor =  "#FF00FF"
// heading.style.fontSize = "50px"
// let newBtn = document.createElement("button");
// newBtn.innerText = "Leave";
// heading.append(newBtn)
// heading.prepend(newBtn)
// heading.after(newBtn)
// heading.before(newBtn)
// let newHead = document.createElement("h1");
// newHead.innerHTML = "<i>Are you new to this site?</i>";
// heading.before(newHead)

// let strong = document.querySelector("strong");
// strong.remove()

// prac Ques
// let newButton = document.createElement("button");
// newButton.innerText = "Go Here";
// newButton.style.backgroundColor = "black";
// newButton.style.color = "white";
// let Struct = document.querySelector("body");
// Struct.prepend(newButton)

// // prac Ques
// let pracPara = document.querySelector(".pracPara");
// pracPara.getAttribute("class");
// pracPara.classList.add("newClass");
// pracPara.classList.remove("pracPara")

// let heading = document.querySelector("h1")
// heading.onmouseover = (e) => {
//     alert('are you enjoying the site?')
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX, e.clientY);

// }
// heading.addEventListener("click", () => {
//     console.log('Hi! Are you enjoying the site?-1')
// })
// let handler2 = () => {
//     console.log('Hi! Are you enjoying the site?-2')
// }
// heading.addEventListener("click", handler2)
// heading.addEventListener("click", () => {
//     console.log('Hi! Are you enjoying the site?-3')
// })

// heading.removeEventListener("click", handler2)

// prac Ques
let modeBtn = document.querySelector("#mode")
let body = document.querySelector("body")
let currMode = 'light'
modeBtn.addEventListener("click", () => {
    if (currMode === 'light') {
        currMode = 'dard'
        body.classList.add( "black");
        body.classList.remove("white");

    } else {
        currMode = 'light'
        body.classList.add( "white");
        body.classList.remove( "black");
    }

    
})
