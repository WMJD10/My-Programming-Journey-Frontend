// /*
// Script at body
// document.querySelector('h1').style.color = 'blue';

// Script at head
// window.onload = function () {
//    document.querySelector("h1").style.color = "blue";
// };
// */

// /*
//    Output To Screen
//    - window.alert()
//    - document.write()
//    - console.log()

//    Syntax
//    */

// //   window.alert("Hello from JS file"); don't use it

// // document.write("<h1>hhh</h1>"); don't use it

// // console.log("Hello from JS file"); to log massage in console

// /*
//    Console Methods
//    - log
//    - error
//    - table

//    Web API

//    Styling Console
//    - Directive %c
// */

// console.log("log");
// console.error("error");
// console.table(["ahmed", "ali", "fadil"]);

// console.log(
//   "hello %cJS %cfile",
//   "color: red; font-size:40px",
//   "color: green; font-size:40px",
// );

// // Console it's API not JS method

// /*
//    ES6
// */

// var mname = " mk";
// console.log("hello" + mname);
// console.log(`hello${mname}`);

// /*
//    Data Types
//    - String
//    - Number
//    - Array => Object
//    - Object
//    - Boolean
//    - Undefined
// */

// console.log("mmk MK");
// console.log(typeof "mmk MK");
// console.log(typeof 500000);
// console.log(typeof [20, 23, 24]);
// console.log(typeof { name: "mmk", age: 17, country: "iraq" });
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// /*
//    Variables Intro
//    - What is Variable ? , named container to store data
//    - Why We Use Variable ? , to store data or change data by once
//    - Declare Variable and Use it
//    - Syntax ( keyword | var name | assignment OP like "="|var value)
//    - Variable without var
//    - Multiple Variable
//    - ID and Global Variable
//    - Loosely Typed vs Strongly Typed
//       JS is Loosely Typed Language u don't need to tell the type of variable when u declare it

// */

// var user = "Me",
//   age = "17";

// console.log(user);
// console.log(user);
// console.log(user);
// console.log(age);
// // console.log(hello);

// // hello.innerHTML = "HI";

// /*
//    Identifiers
//    - Name Conventions & Rules
//    - Reserved Words =. var, if, ... .
// */

// var $_us_er_$ = "M?E";

// console.log($_us_er_$);

// /*
//    Var
//    - Re-declare (Yes)
//    - Access Before Declare (Undefined)
//    - Variable Scope Drama [Added to window OB]
//    - Block or Function Scope

//    Let
//    - Re-declare (No => Error)
//    - Access Before Declare (Error)
//    - Variable Scope Drama [NOt Added to window OB]
//    - Block or Function Scope

//    Const
//    - Re-declare (No => Error)
//    - Access Before Declare (Error)
//    - Variable Scope Drama [NOt Added to window OB]
//    - Block or Function Scope
// */

// const aabb = 1;

// console.log(aabb);

// /*
//    String Syntax + Character Escape Sequence
//    \ Escape + Line Continue
//    \n => New Line
//    \t => Tab
//    \b => Backspace
//    \r => Carriage Return
//    \f => Form Feed
//    \v => Vertical Tab ......
// */

// console.log('ELme Web "me"');
// console.log("ELme web 'me'");
// // console.log("ELme web "me""); Error
// console.log('ELme web "me"');
// console.log("ELme web 'me'");
// console.log("ELme \\ web 'me'");
// console.log("ELme web \n me");

// /*
//    Concatenation
//    - + => Concatenation Operator
//    - += => Concatenation Assignment Operator

//    document.write(a + " " + b);
//    console.log(a, b);
// */

// /*
//    Template Literals (Template Strings)
// */
// // let a = "We love";
// // let b = "JS";
// // let c = "&";
// // let d = "Programming";

// // console.log(a + " \"\" " + b +
// //    "\n "+ c + " " + d);

// // console.log(`${a} "" \\  '' ${b}
// //    ${c} ${d} ${(1350*300)/50}`);

// /*
//    let title = "ELme";
//    let desc = "ELme web SCH";
//    let markup = `
//       <div class="card">
//          <div class="childe">
//             <h2>${title}</h2>
//             <p>${desc}</p>
//          </div>
//       </div>
//    `;
//    document.querySelector("body").innerHTML = marckup;
// */

// // challenge

// // let title_N = "ELme";
// // let desc_Tn = "ELme web SCH";
// // let date = "25/10";

// // let mark_up = `
// //    <div class="card">
// //       <div class="challenge">
// //          <h3>${title_N}</h3>
// //          <p>${desc_Tn}</p>
// //          <span>${date}</span>
// //       </div>
// //    </div>
// // `;

// // document.querySelector("body").innerHTML = mark_up.repeat(4);

// /*
//    Arithmetic Operators
//    - + Addition
//    - - Subtraction
//    - * Multiplication
//    - / Division
//    - ** Exponentiation
//    - % Modulus (Division Remainder)
//    - ++ Increment [ Post / Pre]
//    - -- Decrement [ Post / Pre]
// */

// console.log(10 + 20);
// console.log(10 + "Me");
// console.log(10 - 20);
// console.log(10 - "Me"); // NaN
// console.log(typeof NaN);
// console.log(10 * 20);
// console.log(10 * -20);
// console.log(20 / 5);
// console.log(20 / 3);
// console.log(2 ** 4);
// console.log(2 * 2 * 2 * 2);
// console.log(10 % 2);
// console.log(11 % 2); // Remove 1
// console.log(34 / 2);
// var num = 1;
// console.log(num++);
// console.log(num);

// console.log(++num);
// console.log(num);
// var num = 1;
// console.log(num--);
// console.log(num);

// console.log(--num);
// console.log(num);

// /*
//    - + Unary Plus [Return Number If Its n't A Number]
//    - - Unary Negation [Return Negative Number If Its not A Number]
//    Tests
//    - Normal Number
//    - String Number
//    - String Negative Number
//    - String Text
//    - FLoat
//    - Hexadecimal Number System => 0xFF
//    - null
//    - false
//    - true
// */

// console.log(+100);
// console.log(+"100");
// console.log(+"-100");
// console.log(+"Me");
// console.log(+"16.2");
// console.log(+0xff);
// console.log(+true);
// console.log(+null);
// console.log(+false);

// console.log(-100);
// console.log(-"100");
// console.log(-"-100");
// console.log(-"Me");
// console.log(-"16.2");
// console.log(-0xff);
// console.log(-true);
// console.log(-null);
// console.log(-false);

// console.log(Number("100"));

// /*
//    Type Coercion (Type Casting)
//    - +
//    - -
//    - "" - 2
//    - false - true
// */

// let z = "10";
// let y = 20;
// let x = true;

// console.log(z + y);
// console.log(+z + y);

// console.log(z - y);
// console.log(+z - y);

// console.log("" - 2);
// console.log(+"");

// console.log(false + true);
// console.log(y + true);
// console.log(+z + y + x);

// /*
//    Assignment Operators
// */

// let m = 10;
// m = m + 20;
// m = m + 70;

// m += 100; // m = m + 100
// m -= 50; // m = m - 50
// m /= 3; // m = m / 3
// // ........

// console.log(m);

// // Challenge 1

// let A = 10;
// let B = "20";
// let C = 80;

// console.log(++A + +B++ + +C++ - +A++);
// console.log(++A + -B + +C++ - -A++ + +A);
// console.log(--C + +B + --A * +B++ - +B * A + --A - +true);
// console.log(11 + 20 + 80 - 11);
// console.log(13 - 21 + 81 + 13 + 14);
// console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1);

// /*
// 1ST cons [++A] [+] [+B++] [+] [+C++] [-] [+A++]
//          [11]  [+] [20]   [+] [80]   [-]   [11]
//       [1+A=11] + [20+1=21] + [80+1=81] + [11+1=12]
//       => A=12, B="21", C=81

// 2ND cons [++A] [+] [-B] [+] [+C++] [-] [-A++] [+] [+A]
//          [13]  [+] [-21][+] [81]   [-] [-13]  [+] [14]
//       [1+12=13] + [-"21"=-21] + [81+1=82] + [13+1=14] + [14].  -[-]=> +
//       => A=14, B="21", C=82

// 3RD cons [--C] [+] [+B] [+] [--A] [*] [+B++] [-] [+B] [*] [A] [+] [--A] [-] [+true]
//          [81]  [+] [21] [+] [13]  [*] [21]   [-] [22] [*] [13][+] [12]  [-] [1]
//          => A=12, B="22", C=81

// ALL Binary OP Was Addition OP
// */

// // Challenge 2

// let s = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// // Only use Variables Value
// // Don't Use Variable Twice

// console.log(-s * +e); //2000
// console.log(++e * ++g - --s + f); //173

// /*
//    Number
//    - Double Precision
//    - Syntactic Sugar "_"
//    - e
//    - **
//    - With Decimal
//    - Number + BigInt
//    - Number Min Value
//    - Number Max Value
// */

// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(1000000.0);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);

// /*
//    Number Methods
//    - Two Dits To Call A Method
//    - toString()
//    - toFixed()
//    - .....
//    - paresInt()
//    - paresFloat()
//    - isInteger()
//    - isNaN()
// */
// console.log((100).toString());
// console.log((100).toString());
// console.log((100.01).toString());

// console.log((100.555555).toFixed(2));
// console.log(Number("100 ME"));
// console.log(+"100 ME");
// console.log("100 ME");
// console.log(parseInt("100 ME"));
// console.log(parseInt("ME 100 ME"));

// console.log(parseInt("100.55 ME"));
// console.log(parseFloat("100.55 ME"));

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.55));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN("ME"));
// console.log(Number.isNaN("ME" / 2));

// /*
//    Math Object
//    - round()
//    - ceil()
//    - floor()
//    - min()
//    - max()
//    - pow()
//    - random()
//    - trunc()
// */

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));

// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));

// console.log(Math.pow(2, 4));

// console.log(Math.random());

// console.log(Math.trunc(99.5));

// // Number Challenge

// // let a = 1_00;
// // let b = 2_00.5;
// // let c = 1e2;
// // let d = 2.4;

// // // Find Smallest Number in All Variables And Return Integer

// // console.log(Math.min(Math.round(a, b, c, d)));

// // // Use Variable a + d One Time To Get The Needed Output

// // console.log(Math.pow(a, 2)); // 10000 ,how i would do it
// // console.log(Math.pow(a, parseInt(d))); // 10000 how i did it

// // // Get Integer "2" From d Variable With 4 Methods

// // console.log(parseInt(d));
// // console.log(Math.floor(d));
// // console.log(Math.round(d));
// // console.log(Math.trunc(d));

// // // Use Variables b + d To Get This Values

// // console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// // console.log(Math.ceil(b) / Math.ceil(d)); // 67 => - Number

// /*
//    String Methods
//    - Access With Index
//    - Access With CharAt()
//    - length
//    - trim()
//    - toUpperCase()
//    - toLowerCase()
//    - Chain Methods

//    P2
//    - IndexOf(Value [mand], Start [Opt] 0)
//    - lastIndexOf(Value [mand], Start [Opt] length)
//    - slice(Start [mand], End [Opt] Not Include End)
//    - repeat(Times)
//    - split(Separator [Opt], Limit [Opt])

//    P3
//    - substring(Start [mand], End [Opt] Not Including End)
//       Start > End Will Swap
//       Start < 0 It Start From 0
//       Use Length To Get Last Character
//    - includes(Value [mand], Start [Opt] Default 0)
//    - startsWith(Value [mand], Start [Opt] Default 0)
//    - endWith(Value [mand], Length [Opt] Default Full Length)
// */

// let theName = "  Majd  ";

// console.log(theName);
// console.log(theName[1]);
// console.log(theName[4]);

// console.log(theName.charAt(1));
// console.log(theName.charAt(4));

// console.log(theName.length);
// console.log(theName.trim());

// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());

// console.log(theName.trim().charAt(2).toUpperCase());

// let a = "Mo Web School";

// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));
// console.log(a.indexOf("o")); //1
// console.log(a.lastIndexOf("o")); // 11

// console.log(a.slice(3, 6));

// console.log(a.slice(-5, -3));

// console.log(a.repeat(5));

// console.log(a.split(" ", 2));

// console.log(a.substring(0, 2));

// console.log(a.substring(2, 0));

// console.log(a.substring(-8, 6)); // 0-6

// console.log(a.length);

// console.log(a.substring(a.length - 6, a.length - 4));

// console.log(a.includes("m"));
// console.log(a.includes("M"));
// console.log(a.includes("M", 5));

// console.log(a.startsWith("M"));
// console.log(a.includes("M", 2));
// console.log(a.includes("o", 2));

// console.log(a.endsWith("o"));
// console.log(a.endsWith("o", 2));

// /*
//   Challenge
//   All Solutions Must Be In One Chain
//   U Can Use Concatenate
// */

// let b = "Elzero Web Shool";

// // Include This Methods In Ur Solution [Slice, CharAt]
// console.log(b.charAt(2).toUpperCase() + b.slice(3, 6)); // Zero

// // 8 H
// console.log(b.charAt(12).toUpperCase().repeat(8)); // HHHHHHHH

// // Return Array
// console.log(b.split(" ", 1)); // [Elzero]

// // Solution Must Be Dynamic And String May Change

// /* console.log(
//       b.trim().charAt(0).toLowerCase() +
//       b.trim().slice(1, -1).toUpperCase() +
//       b.trim().slice(-1).toLowerCase()
//     );  eLZERO WEB SCHOOl
// */
// // But for more Cleaner code I'drather to do it like :

// b = b.trim();
// console.log(
//   b.charAt(0).toLowerCase() +
//     b.slice(1, -1).toUpperCase() +
//     b.slice(-1).toLowerCase(),
// ); // eLZERO WEB SCHOOl

// /*
//   Comparison Operators
//   - == Equal
//   - != Not Equal

//   - === Identical
//   - !== Not Identical

//   - > Larger Than
//   - >= Larger Than Or Eq

//   < Smaller Than
//   <= Smaller Than Or Eq
// */

// console.log(10 == "10"); // Compare Value Only
// console.log(10 != "10"); // Compare Value Only

// console.log(10 === "10"); // Compare Value + Type
// console.log(10 !== "10"); // Compare Value + Type
// console.log(10 === 10); // Compare Value + Type
// console.log(10 !== 10); // Compare Value + Type

// console.log(10 > 20);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(10 < 20);
// console.log(10 < 10);
// console.log(10 <= 10);

// console.log("Osama" === "Jake");
// console.log(typeof "Osama" === typeof "Jake");
// // we make it compare by typeof and they are both string so True

// /*
//   Logical OperaTORS
//   - ! Not
//   - && And
//   - || Or
// */

// console.log(true);
// console.log(!true);
// console.log(10 == "10");
// console.log(!(10 == "10"));

// console.log(10 == "10" && 10 > 8 && 10 > 50);

// console.log(10 == "10" || 10 > 80 || 10 > 50);

// /*
//   Control Flow
//   - if () {}
//   - else if () {}
//   - else {}

//       if (ur Condition) {
//          // Block of code
//       }

//   Part2

//   Nested If
// */

// let price = 100;
// let discount = false;
// let discountAmount = 40;
// let country = "USA";
// let student = true;

// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "USA") {
//   if (student === true) {
//     price -= discountAmount + 30;
//   } else {
//     price -= discountAmount + 10;
//   }
// } else {
//   price -= 10;
// }

// console.log(price);

// /*
//   Conditional (Ternary) Operator
// */

// // let TheName = "Mona";
// // let TheGender = "Female";
// // let TheAge = "30";

// // if (TheGender === "Male") {
// //   console.log("Mr." + TheName);
// // } else {
// //   console.log("Mrs." + TheName);
// // }

// // // Condition ? If True : If False

// // TheGender === "Male"
// //   ? console.log("Mr." + TheName)
// //   : console.log("Mrs." + TheName);

// // let result = TheGender === "Male" ? "Mr." + TheName : "Mrs." + TheName;

// // document.querySelector("body").innerHTML = result;

// // console.log(`Hello ${TheGender === "Male" ? "Mr." : "Mrs."} ${TheName}`);

// // TheAge < 20
// //   ? console.log(20)
// //   : TheAge > 20 && TheAge < 60
// //     ? console.log("20 To 60")
// //     : TheAge > 60
// //       ? console.log("Over 60")
// //       : console.log("Unknown");

// /*
//   Logical Or ||
//   -- Null + Undefined + Any Falsy Value
//   Nullish Coalescing Operator ??
//   -- Null + Undefined
// */

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let Price = 0;

// console.log(`The Price Is ${Price || 200}`);
// console.log(`The Price Is ${Price ?? 200}`);

// // If Challenge

// let c = 10;

// if (c < 10) {
//   console.log(10);
// } else if (c >= 10 && c <= 40) {
//   console.log("10 To 40");
// } else if (c > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }

// // Write With Ternary If Syntax

// c < 10
//   ? console.log("10")
//   : c >= 10 && c <= 40
//     ? console.log("10 To 40")
//     : c > 40
//       ? console.log("> 40")
//       : console.log("Unknown");

// //////////////////////////

// let st = "Elzero Web School";

// if (typeof st === typeof "34") {
//   console.log("Good");
// }

// // W Position May Change!!
// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }

// if (st !== "String") {
//   console.log("Good");
// }

// if (!(st === "number")) {
//   console.log("Good");
// }

// if (st.substring(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

// /*
//   Switch Statement
//   Switch (expression) {
//     Case 1:
//       // Code Block
//     break;
//     Case 2:
//       // Code Block
//     break;
//     Default:
//       //Code Block
//   }
//   - Default Ordering
//   - Multiple Match
//   - ===
// */

// let day = 3;

// switch (day) {
//   case 0:
//     console.log("saturday");
//     break;
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//   case 3:
//     console.log("monday");
//     break;
//   default:
//     console.log("unknown day");
// }

// // Switch Challenge

// let job = "job";
// let salary = 0;

// // if (job === "Manager") {
// // 	salary = 8000;
// // } else if (job === "IT" || job === "Support" ) {
// // 	salary = 6000;
// // } else if (job === "Developer" || jpb === "Designer") {
// // 	salary = 7000;
// // } else {
// // 	salary = 4000;
// // }  TO Switch

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     break;

//   case "IT":
//   case "Support":
//     salary = 6000;
//     break;

//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     break;

//   default:
//     salary = 4000;
// }
// console.log(salary);

// // If Challenge

// let holidays = 4;
// let money = 0;

// // switch (holidays) {
// // 	case 0:
// // 		money = 5000;
// // 		console.log(`My money is ${money}`)
// // 	break;

// // 	case 1:
// // 	case 2:
// // 		money = 3000;
// // 		console.log(`My money is ${money}`)
// // 	break;

// // 	case 3:
// // 		money = 2000;
// // 		console.log(`My money is ${money}`)
// // 	break;

// // 	case 4:
// // 		money = 1000;
// // 		console.log(`My money is ${money}`)
// // 	break;

// // 	case 5:
// // 		money = 0;
// // 		console.log(`My money is ${money}`)
// // 	break;

// // 	default:
// // 		money = 0;
// // 		console.log(`My money is ${money}`)
// // } TO If

// if (holidays === 0) {
//   money = 5000;
// } else if (holidays === 1 || holidays === 2) {
//   money = 3000;
// } else if (holidays === 3) {
//   money = 2000;
// } else if (holidays === 4) {
//   money = 1000;
// } else {
//   money = 0;
// }
// console.log(`My money is ${money}`);

// /*
//   Arrays
//   - Create Array [Two Methods] new Array() + []
//   - Access Array Element
//   - Nested Array
//   - Change Array Element
//   - Check For Array Array.isArray(arr);
//   - Length

//   Array Methods [Adding And Removing]
//   - unshift ("", "") Add Element to The Start
//   - push ("", "") Add Element to the End
//   - shift() Remove First ELement
//   - pop() Remove Last ELement

//   Array Methods [Search]
//   - indexOf (Search Element, From Index [Opt])
//   - lastIndexOf (Search Element, From Index [Opt])
//   - includes (valueToFind, FromIndex [Opt])
// */

// let myFriends = [
//   "Ahmed",
//   "Mohamed",
//   "Sayed",
//   ["Joe", "Mathue"],
//   "Mee",
//   "Osama",
//   "Mareo",
// ];

// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[2]}`);
// console.log(`${myFriends[1][2]}`);
// console.log(`Hello ${myFriends[3][1]}`);
// console.log(`Hello ${myFriends[3][1][0]}`);

// console.log(myFriends);
// myFriends[1] = "luke";
// myFriends[3] = ["Mjd", "Sara"];
// console.log(myFriends);

// console.log(typeof myFriends);
// console.log(Array.isArray(myFriends));

// myFriends[myFriends.length - 2] = "Gamal";

// myFriends.length = 6;

// console.log(myFriends);

// myFriends.unshift("you", "Mee");

// console.log(myFriends);

// myFriends.push("Sama", "david");

// console.log(myFriends);

// let first = myFriends.shift();

// console.log(myFriends);

// console.log(`First Name Is ${first}`);

// let last = myFriends.pop();

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);

// console.log(myFriends);

// console.log(myFriends.indexOf("Mee"));
// console.log(myFriends.indexOf("Mee", 4));

// console.log(myFriends.lastIndexOf("Mee"));
// console.log(myFriends.lastIndexOf("Mee", -4));

// console.log(myFriends.includes("Mee"));
// console.log(myFriends.includes("Mee", 5));

// if (myFriends.indexOf("you") === -1) {
//   console.log("Not Found");
// }
// if (myFriends.lastIndexOf("you") === -1) {
//   console.log("Not Found");
// }
// console.log(myFriends.indexOf("you"));

// console.log(myFriends.lastIndexOf("you"));

// /*
//   Array Methods [Sort]
//   - sort (Function [Opt])
//   - reverse
// */

// let myArray = [10, "Sayed", "Me", "90", 1200, 100, "10", -20, -10];

// console.log(myArray);
// // console.log(myArray.sort()); // -9-0, 0-9, A-Z, a-z
// // console.log(myArray.reverse()); // Revers sort, cause we did sort before it
// console.log(myArray.sort().reverse());

// /*
//   Array Methods [Slicing]
//   - slice (Start [Opt], End [Opt] Not Including The End)
//   --- slice () => All Array
//   --- If Start Is Undefined => 0
//   --- Negative Count From End
//   --- If End Is Undefined || > Index => Slice To The End Array.length
//   --- Return New Array
//   - splice (Start [mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
//   --- If Negative => Start From The End
// */

// let MyFriends = ["Maher", "Sayed", "Alix", "Olive", "Gabriel", "Anna"];

// console.log(MyFriends);
// console.log(MyFriends.slice(1));
// console.log(MyFriends.slice(1, 3));
// console.log(MyFriends.slice(-3));
// console.log(MyFriends.slice(1, -2));
// console.log(MyFriends.slice(-4, -2));
// console.log(MyFriends);

// MyFriends.splice(1, 2, "Sameer", "Samara");
// console.log(MyFriends);

// /*
//   Array Methods [Joining]
//   - concat (array, array) => Return A New Array
//   - join (Separator)
// */

// let schoolFriends = ["Karlos", "shady"];

// let allFriends = myFriends.concat(MyFriends, schoolFriends, "Ibrahem", [1, 2]);

// console.log(allFriends);

// console.log(allFriends.join("|").toUpperCase());

// /*
//   Array Challenge
// */

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here !!Without writing Numbers!!

// console.log(my.slice(zero, my.indexOf("Gamal")).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]

// // console.log(my.slice(my.shift(), --counter)); // ["Elham", "Mazero"] How i did it
// console.log(my.slice(my.indexOf("Mazero"), counter).reverse()); // ["Elham", "Mazero"]

// console.log(my.toString(my.splice(zero, counter + counter, "Elzero"))); // "Elzero"

// console.log(my[zero].replace("Elzero", "rO")); // "How i did it

// /*
//   Loop
//   - For
//   for ([1], [2], [3]) {
//     // Block Code
//   }
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// */

// let urFriends = [1, 2, "Osama", "Ahmed", "Sayed", "Ali"];

// let onlyNames = [];

// for (let i = 0; i < urFriends.length; i++) {
//   if (typeof urFriends[i] === `string`) {
//     onlyNames.push(urFriends[i]);
//   }
// }

// console.log(onlyNames);

// // console.log(urFriends[1])
// // console.log(urFriends[2])
// // console.log(urFriends[3])
// // console.log(urFriends[4])

// // for (let i = 0; i < urFriends.length; i++) {
// //   console.log(urFriends[i])
// // }

// /*
//   Loop
//   - Nested Loops
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//   console.log("-".repeat(10));
//   console.log(`# ${products[i]}`);
//   console.log("-".repeat(10));

//   console.log("Colors");
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }

//   console.log("Models");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`);
//   }
// }

// /*
//   Loop
//   - Break
//   - Continue
//   - Label
// */

// let productS = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor"];

// let colorS = ["Red", "Green", "Black"];

// mainLoop: for (let q = 0; q < productS.length; q++) {
//   // console.log(productS[q]);

//   // if (productS[q] === "Pen") {
//   //   break;
//   // }
//   if (typeof productS[q] === "number") {
//     continue;
//   }
//   console.log(productS[q]);

//   nestedLoop: for (let w = 0; w < colorS.length; w++) {
//     console.log(`- ${colorS[w]}`);
//     if (colorS[w] === "Green") {
//       break mainLoop;
//     }
//   }
// }

// /*
//   Loop For ADV EX
// */

// let ProductS = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
// let i = 0;

// console.log(`-`.repeat(8));

// for (;;) {
//   console.log(ProductS[i]);
//   i += 2;
//   if (i === ProductS.length) break;
// }

// /*
//   Product Practice
// */

// // let product_s = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
// // let color_s = ["Red", "Green", "Black"];
// // let show_count = 3;

// // document.write(`<h1>Show ${show_count} Products</h1>`);

// // for (let i = 0; i < show_count; i++) {
// //   document.write(`<div>`);
// //   document.write(`<h3>[${i + 1}] ${product_s[i]}</h3>`);
// //   for (let j = 0; j < color_s.length; j++) {
// //     document.write(`<p>${color_s[j]}</p>`);
// //   }
// //   document.write(`<p>${color_s.join(" | ")}</p>`);
// //   document.write(`</div>`);
// // }

// /*
//   Loop
//   - While
//   - Do/While
// */

// let products_ = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];

// let o = 0;

// // while (false) {
// //   console.log(o);
// //   o++;
// // }

// do {
//   console.log(o);
//   o++;
// } while (false);

// console.log(o);

// // Loop Challenge

// // let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// // let myEmployees = [
// //   "Amgad",
// //   "Samah",
// //   "Ameer",
// //   "Omar",
// //   "Othman",
// //   "Amany",
// //   "Samia",
// // ];
// // let countEm = myAdmins.indexOf("Stop");

// // document.write(`<hr>`);

// // document.writeln(`<div>We Have ${countEm} Admins</div><hr>`);

// // for (let i = 0; i < countEm; i++) {
// //   if (myAdmins[i] === "Stop") break;

// //   document.write(`<div>`);
// //   document.write(
// //     `<strong>The Admin For Team ${i + 1} Is ${myAdmins[i]}</strong>`,
// //   );
// //   document.write(`<h3>Team Members:</h3>`);

// //   let membercounter = 1;

// //   for (let e = 0; e < myEmployees.length; e++) {
// //     let employees = myEmployees[e];
// //     let admin_f = myAdmins[i][0];
// //     let employees_f = myEmployees[e][0];

// //     if (employees_f === admin_f) {
// //       document.write(`<br>-${membercounter} ${employees}</br>`);
// //       membercounter++;
// //     }
// //   }

// //   document.write(`</div>`);

// //   document.write(`<hr>`);
// // }

// /*
//   Function
//   - What Function Is ? Block Of code (DRY)=> Don't Repeat Yourself.
//   - User-Defined vs Built In
//   - Syntax + Basic Usage
//   - Ex From Real Life
//   - Parameter + Argument
//   - Practical Ex

//   Function ADV Ex
// */

// function sayHello(userName, age) {
//   if (age < 18) {
//     console.log(`Sorry ${userName} The app is Not Suibtable For U`);
//   } else {
//     console.log(`Hi ${userName} your age is ${age}`);
//   }
// }

// sayHello("MJD", 16);
// sayHello("Me", 20);
// sayHello("You", 34);

// function generateYears(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// generateYears(1956, 2026, 2020);

// /*
//   Function
//   - Return
//   - Automatic Semicolon insertion [No Line Terminator Allowed]
//   - Interrupting
// */

// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//     if (i === 15) {
//       return `Interrupting`;
//     }
//   }
// }

// generate(10, 20);

// /*
//   Function
//   - Default Function Parameters
//   - Function Parameters Default [Undefined]
//   - Old Strategies [Condition + Logical Or]
//   - ES6 Method
// */

// function sayHello(username = "Unknown", age = "Unknown") {
//   // if (age === undefined) {
//   //...age = "Unknown";
//   //}

//   // age = age || "Unknown";

//   return `Hello ${username} Your Age Is ${age}`;
// }

// console.log(sayHello("Osama"));

// /*
//   Function
//   - Rest Parameters
//     - Only One Allowed
//     - Must Be Last Element
// */

// function calc(...numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i]; // result = result + numbers[i]
//   }
//   return `Final Result Is ${result}`;
// }

// console.log(calc(10, 20, 10, 30, 50, 20, 10));

// /*
//   Function ADV Practice
//   - Parameters
//   - Default
//   - Rest
//   - Loop
//   - Condition
// */

// // function showInfo(us = "Unknown", ag = "Unknown", rt = 0, show = "No", ...sk) {
// //   document.write(`<div>`);
// //   document.write(`<h3>Welcome, ${us}</h3>`);
// //   document.write(`<p>Age: ${ag}</p>`);
// //   document.write(`<p>Hour Rate: $${rt}</p>`);
// //   if (show === "No") {
// //     if (sk.length > 0) {
// //       document.write(`<p>Skills Is Hidden</p>`);
// //     } else {
// //       document.write(`<p>There Is NO Skills</p>`);
// //     }
// //   } else {
// //     if (sk.length > 0) {
// //       document.write(`<p>Skills: ${sk.join(" - ")}</p>`);
// //     } else {
// //       document.write(`<p>Skills: No Skills`);
// //     }
// //   }
// //   document.write(`</div>`);
// // }

// // showInfo("MJD", 16, 20, `Yes`, "HTML", "CSS", "JS");

// /*
//   Function - Random Argument Challenge
//   ====================================
//   Create Function showDetails
//   Function Accept 3 Parameters [a_na, b, c]
//   Data Types Info Is :
//   - String => Name,
//   - Number => Age,
//   - Boolean => Status.
//   Argument Is Random
//   Data is Not Stored, Output Depend On Data Types
//   - Use Ternary Conditional OP
// */
// function showDetails(a, b, c) {
//   let name = typeof a === "string" ? a : typeof b === "string" ? b : c;
//   let age = typeof a === "number" ? a : typeof b === "number" ? b : c;
//   let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;
//   return `Hello ${name}, Your Age Is ${age}, ${status ? "You are Available For Hire" : "Sorry You are Not Available For Hire"}`;
// }

// console.log(showDetails("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You are Available For Hire"
// console.log(showDetails(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You are Available For Hire"
// console.log(showDetails(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You are Available For Hire"
// console.log(showDetails(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You are Not Available For Hire"

// /*
//   Function
//   - Anonymous Function
//   - Calling Named Function vs Anonymous Function
//   - Argument To Other Function
//   - Task Without Name
//   - setTimeout
// */

// // console.log(calc(20, 30))

// // function calc(n1, n2) {
// //   return n1 + n2;
// // }

// let calculator = function mmk(n1, n2) {
//   return n1 + n2;
// };

// console.log(calculator(20, 30));

// // document.getElementById("show").onclick = function () {
// //   console.log("show");
// // };

// /*
//   Function
//   - Function Inside Function
//   - Return Function
// */

// // // EX 1
// // function Masssge(fName, lName) {
// //   let massage = `Hello`;
// //   // Nested FUNc
// //   function concatMsg() {
// //     massage = `${massage} ${fName} ${lName}`;
// //   }
// //   concatMsg();
// //   return massage;
// // }

// // console.log(Masssge("MJD", "M"))

// // // EX 2
// // function Masssge(fName, lName) {
// //   let massage = `Hello`;
// //   // Nested FUNc
// //   function concatMsg() {
// //     return `${massage} ${fName} ${lName}`;
// //   }
// //   concatMsg();
// //   return concatMsg();
// // }

// // console.log(Masssge("MJD", "M"))

// // EX 2
// function Masssge(fName, lName) {
//   let massage = `Hello`;

//   // Nested FUNc
//   function concatMsg() {
//     function getFname() {
//       return `${fName} ${lName}`;
//     }

//     return `${massage} ${getFname()}`;
//   }

//   return concatMsg();
// }

// console.log(Masssge("MJD", "M"));

// /*
//   Function
//   - Arrow Function
//   -- Regular vs Arrow [Param + NO Param]
//   -- Multiple Lines
// */

// // let print = function () {
// //   return 10;
// // }

// // let print = () => 10; // One Line, One statement

// // let print = function (num) {
// //   return num;
// // }

// // let print = num => num; // One Param

// // let print = function (num1, num2) {
// //   return num1 + num2;
// // }
// let print = (num1, num2) => num1 + num2; // Two Param

// console.log(print(100, 50));

// /*
//   Scope
//   - Global And Local Scope
//   - Block Scope [If, Switch, For]
// */

// var j = 10;

// if (10 === 10) {
//   // var j =10;
//   let j = 50;
//   console.log(`From If Block ${j}`);
// }

// console.log(`From Global ${j}`);

// // var k = 1;
// // let l = 2;

// // function showTXT() {
// //   var k = 10;
// //   let l = 20;
// //   console.log(`Function - From Local ${k}`);
// //   console.log(`Function - From Local ${l}`);
// // }

// // console.log(`From Global ${k}`);
// // console.log(`From Global ${l}`);

// // showTXT();

// /*
//   Scope
//   - Lexical
// */

// function parent() {
//   let f = 10;

//   function childe() {
//     console.log(f);
//     // console.log(`${p} From CH`);

//     function grand() {
//       let p = 100;
//       console.log(`${f} From G`);
//       console.log(`${x} From G`);
//     }
//     grand();
//   }
//   childe();
// }
// parent();

// /*
//   Function Challenges
// */

// // [1] One Statement In Function
// // [2] Convert To Arrow Function
// // [3] Print The Output [Arguments May Change]

// // let names = function (...names) {
// //   // Parameter?, I wrote ...names
// //   return `String [${names.join("], [")}] => Done !`;
// // };

// // console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// // // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// //Arrow FUn
// let names = (...names) => `String [${names.join("], [")}] => Done !`;

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// /* ====================================================== */

// // [1] Replace ??? In Return Statement To Get The Output
// // [2] Create The Same Function With Regular Syntax
// // [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calco = (one, two, ...nums) => one + two + nums.shift(); // // .shift() gets the first value from the rest parameter array [50]=>50

// console.log(calco(10, myNumbers.shift(), myNumbers.shift())); // 80

// /*
//   Higher Order Functions
//   ---> is a function that accepts functions as parameters and/or returns a function.

//   - Map
//   --- method creates a new array
//   --- populated with the results of calling a provided function on every element
//   --- in the calling array.

//   Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
//   - Element => The current element being processed in the array.
//   - Index => The index of the current element being processed in the array.
//   - Array => The Current Array

//   Notes
//   - Map Return A New Array

//   Examples
//   - Anonymous Function
//   - Named Function

// */

// // OLD

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (let i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i] + myNums[i]);
// }

// console.log(newArray);

// /*
//   Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// console.log(addSelf);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

// */

// //  New

// let Nums = [10, 12, 17, 19, 20];
// let newNumsArr = [];

// function addition(ele) {
//   return ele + ele;
// }

// let Add = Nums.map(addition); //.filter(n => n !== 17 && n !== 20) Before .map If u have some indexes u don't want it

// console.log(Add);

// /*
//   Map
//   - Swap cases
//   - Inverted Numbers
//   - Ignore Boolean Value
// */

// let swappingCases = "eLZERO";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map((ele) =>
//     ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase(),
//   )
//   .join("");

// console.log(sw);

// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });

// console.log(inv);

// let ign = ignoreNumbers
//   .split("")
//   .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
//   .join("");

// console.log(ign);

// /*
//   - Filter
//   --- method creates a new array
//   --- with all elements that implemented by the provided function

//   Syntax filter (callBackFunction (Element, Index, Array) { }, thisArg )
// */

// /*
// Test Map vs Filter

//   let addMap = numbers.map((ele) => ele + ele)

//   console.log(addMap)

//   let addFilter = numbers.filter((ele) => ele + ele)

//   console.log(addFilter)

// */

// // Get Friends their Name Starts With A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let filteredFriends = friends.filter((ele) => ele.startsWith("A"));

// console.log(filteredFriends);

// // Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter((el) => el % 2 === 0);

// console.log(evenNumbers);

// /*
//   Filter
//   - Filter Longest Word By Number
// */

// // Filter Words More Than 4 Characters
// let sentence = "I Love Foood Code Too Playing Much";

// let smallWords = sentence
//   .split(" ")
//   .filter((ele) => ele.length <= 4)
//   .join(" ");

// console.log(smallWords);

// // Filter String + Multiply
// let mix = "A13BS2ZX";

// let fill = mix
//   .split("")
//   .filter((ele) => !isNaN(parseInt(ele)))
//   .map((ele) => ele * ele)
//   .join("");

// console.log(fill);

// /*
//   - Reduce
//   --- method executes a reducer FUn on each element of the array,
//   --- resulting in a single output value

//   Syntax
//   reduce (callBackFUn (Accumulator, Current Val, Current Indx, Source Array) { }, initialValue)
//   - Accumulator => the accumulated Value Previously returned in the last invocation
//   - Current Val => the current element being processed in the array
//   -- Starts from Index 0 if an initialValue is provided
//   -- Otherwise, it starts From Index 1.
// */

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, ele, indx, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`CUrrent ele => ${ele}`);
//   console.log(`CUrrent index => ${indx}`);
//   console.log(`array => ${arr}`);
//   console.log(acc + ele);
//   return acc + ele;
// }, 25);

// console.log(add);

// /*
// Reduce
//   - Longest Word
//   - Remove Characters + Use Reduce
//   */

// let theBiggest = ["Bla", "Propaganda", "other", "AAA", "Battery", "Test"];

// let check = theBiggest.reduce(function (acc, ele) {
//   console.log(`Acc => ${acc}`);
//   console.log(`CUrrent ele => ${ele}`);
//   return acc.length > ele.length ? acc : ele;
// });

// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let remove = removeChars
//   .filter((ele) => !ele.startsWith(`@`))
//   .reduce(function (acc, ele) {
//     return `${acc}${ele}`;
//   });

// console.log(remove);

// /*
//   - ForEach
//   --- method executes a provided FUn Once for each array element.

//   Syntax forEach (callBackFunction (Element, Index, Array) { } , this Arg)

//   Note :
//   - [undefined]
//   - Break Won't Break the Loop
// */

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function (ele) {
//   ele.onclick = function () {
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     this.classList.add("active");
//     allDivs.forEach(function (ele) {
//       ele.style.display = `none`;
//     });
//   };
// });

// /*
//   Higher Order Functions Challenges

//   You Can Use
//   - ,
//   - _
//   - Space
//   - True => 1 => One Time in the whole Code

//   You Cannot Use
//   - Numbers
//   - Letters

//   (Dynamic)

//   - You Must Use [Filter + Map + Reduce + Your Knowledge]
//   - Order Is Not Important
//   - All In One Chain

// */

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split("")
//   .filter((a) => (a === "," || a === `_` || !isNaN(a) ? "" : a))
//   .join("")
//   .split("")
//   .map((a, i, arr) =>
//     i === arr.length - true || !i
//       ? ""
//       : a && a === a.toUpperCase()
//         ? ` ${a}`
//         : a,
//   )
//   .reduce((a, b) => a + b);

// console.log(solution); // Elzero Web School

// /*
//   Object
//   - Testing window Object
//   - Accessing Obj
//   - Dot Notation vs Bracket Notation
//   - Dynamic Property Name
// */

// let myVar = "country";

// let yo = {
//   // Properties
//   theName: "ME",
//   country: "Iraq",
//   countrey: "Iraq",
//   theAge: 16,
//   // Methods
//   sayHello: function () {
//     return `Hello`;
//   },
// };

// console.log(yo.theName);
// console.log(yo.theAge);
// console.log(yo.sayHello());
// console.log(yo.countrey);
// console.log(yo["country"]);
// console.log(yo.myVar);
// console.log(yo[myVar]);

// /*
//   Object
//   - Nested Obj
// */

// let User = {
//   name: "Osama",
//   aeg: 38,
//   skills: ["Html", "CSS", "JS"],
//   available: false,
//   addresses: {
//     SKA: "Riyadh",
//     Egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (User.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free`;
//     }
//   },
// };

// console.log(User.name);
// console.log(User.age);
// console.log(User.skills.join(" | "));
// console.log(User.skills[2]);
// console.log(User.addresses.SKA);
// console.log(User.addresses.Egypt.one);
// console.log(User["addresses"].Egypt.one);
// console.log(User["addresses"]["Egypt"].one);
// console.log(User["addresses"]["Egypt"]["one"]);
// console.log(User.checkAv());

// /*
//   Obj
//   - create With New Keyword new Object();
// */

// let US = new Object({
//   age: 20,
// }); //{
// //   age: 20,
// // };

// US.age = 18;
// US["Country"] = "Iraq";

// US.HI = function () {
//   return `Hi`;
// };

// console.log(US);
// console.log(US.age);
// console.log(US.Country);
// console.log(US.HI());

// /*
//   Function This Keyword
//   - This Introduction
//   - This Inside Obj Method
//   --- When a function  is called as a method of an a Obj
//   --- its this is set to the Obj the Method is Called on
//   - Global Obj
//   - Test Variable With Window & This
//   - Global Context
//   - Function COntext

//   Search
//   - Strict Mode
// */

// console.log(this);
// console.log(this === window);

// var myvar = 100;

// console.log(window.myvar);
// console.log(this.myvar);

// function Hillo() {
//   console.log(this);
//   return this;
// }

// Hillo();

// console.log(Hillo() === window);

// // document.getElementById("cl").onclick = function () {
// //   console.log(this);
// // };

// let Usr = {
//   age: 18,
//   ageInDays: function () {
//     return this.age * 365;
//   },
// };

// console.log(Usr.age);
// console.log(Usr.ageInDays());

// /*
//   Obj
//   - Create Obj With create Method
// */

// let usr = {
//   age: 20,
//   doubleAge: function () {
//     // return usr.age * 2;
//     return this.age * 2;
//   },
// };

// console.log(usr);
// console.log(usr.age);
// console.log(usr.doubleAge());

// let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

// let copyObj = Object.create(usr);

// copyObj.age = 50;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

// /*
//   Object
//   - Create Object With Assign Method
// */

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 100,
//   prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj1, obj2);

// finalObject.prop1 = 200;
// finalObject.prop4 = 250;

// console.log(finalObject);

// let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

// console.log(newObject);

// /*
//   DOM
//   - What Is DOM
//   - DOM Selectors
//   --- Find Element By ID
//   --- Find Element By Tag Name
//   --- Find Element By Class Name
//   --- Find Element By CSS Selectors
//   --- Find Element By Collection
//   ------ title
//   ------ body
//   ------ images
//   ------ forms
//   ------ links
// */

// // let myIdElement = document.getElementById("my-div");
// // let myTagElement = document.getElementsByTagName("p");
// // let myClassElement = document.getElementsByClassName("my-span");
// // let myElement = document.querySelector(".special");
// // let myQuElement = document.querySelector(".my-span");
// // let myQElement = document.querySelectorAll(".my-span");

// // console.log(myIdElement);
// // console.log(myTagElement[1].innerHTML = "Test");
// // console.log(myClassElement[1]);
// // console.log(myElement);
// // console.log(myQuElement);
// // console.log(myQElement);

// // console.log(document.title)
// // console.log(document.body)
// // console.log(document.images)
// // console.log(document.forms[0].one.value)
// // console.log(document.links[1].href = "https://google.com")

// // /*
// //   DOM [Get / Set Elements Content And Attributes]
// //   - innerHTML
// //   - textContent => text pure
// //   - Change Attributes Directly
// //   - Change Attributes With Methods
// //   --- getAttribute
// //   --- setAttribute

// //   Search
// //   - innerText
// // */

// // let MyElement = document.querySelector(".js")

// // console.log(MyElement)
// // console.log(MyElement.innerHTML)
// // console.log(MyElement.textContent)

// // MyElement.innerHTML = " Text From <span>Main.js</span> File"
// // MyElement.textContent = " Text From <span>Main.js</span> File"

// // document.images[0].src = "https://google.com"
// // document.images[0].alt = "Alternate"
// // document.images[0].title = "PIC"
// // document.images[0].id = "pic"
// // document.images[0].className = "imgg"

// // let myLink = document.querySelector(".link")

// // console.log(myLink.getAttribute("class"))
// // console.log(myLink.getAttribute("href"))

// // myLink.setAttribute("href", "https://X.com")
// // myLink.setAttribute("title", "X")

// /*
//   DOM [Check Attributes]
//   - Element.attributes
//   - Element.hasAttribute
//   - Element.hasAttributes
//   - Element.removeAttribute
// */

// // console.log(document.getElementsByTagName("p")[0].attributes);

// // let myP = document.getElementsByTagName("p")[0];

// // myP.hasAttribute("data-src")
// //   ? myP.getAttribute("data-src") === ""
// //     ? myP.removeAttribute("data-src")
// //     : myP.setAttribute("data-src", "New Value")
// //   : myP.setAttribute("data-src", "NotF");

// // if (myP.hasAttributes()) {
// //   console.log(`Has Attributes`);
// // }

// // document.getElementsByTagName("div")[0].hasAttributes()
// //   ? console.log(`Has Attributes`)
// //   : console.log("DSNT have Attributes");

// /*
//   DOM [Create Elements]
//   - createELement
//   - createComment
//   - createTextNode
//   - createAttribute
//   - appendChild
// */

// // let myElement = document.createElement("div");
// // let myAttr = document.createAttribute("data-custom");
// // let myText = document.createTextNode("Product One");
// // let myComment = document.createComment("This Is Div");

// // myElement.className = "product";
// // myElement.setAttributeNode(myAttr);
// // myElement.setAttribute("data-Test", "Testing");

// // // Append Comment To Ele
// // myElement.appendChild(myComment);

// // // Append Text To Element
// // myElement.appendChild(myText);

// // // Append Ele To Body
// // document.body.appendChild(myElement);

// // console.log(myElement);

// /*
//   DOM [create ele]
//   - Practice With H's & P's
// */

// // for (let i = 1; i <= 100; i++) {

// //   let myMainEle = document.createElement("div");
// //   let myh2 = document.createElement("h2");
// //   let myp = document.createElement("p");

// //   let myHText = document.createTextNode(`Product Title ${i}`);
// //   let myPText = document.createTextNode("Product Desc");

// //   myh2.appendChild(myHText);
// //   myMainEle.appendChild(myh2);

// //   myp.appendChild(myPText);
// //   myMainEle.appendChild(myp);

// //   myMainEle.className = "product";

// //   document.body.appendChild(myMainEle);

// // }

// /*
//   DOM [Deal With children's]
//   - children
//   - childNodes
//   - firstChild
//   - lastChild
//   - firstElementChild
//   - lastElementChild
// */

// // let myEle = document.querySelector("div");

// // console.log(myEle);

// // console.log(myEle.children);
// // console.log(myEle.children[1]);

// // console.log(myEle.childNodes);
// // console.log(myEle.childNodes[0]);

// // console.log(myEle.firstChild);
// // console.log(myEle.lastChild);

// // console.log(myEle.firstElementChild);
// // console.log(myEle.lastElementChild);

// /*
//   DOM [Events]
//   - Use Events On HTML
//   - Use Events On Js

//   --- onclick
//   --- oncontextmenu => The Click R Menu

//   --- onmouseenter => when u hover
//   --- onmouseleave => after u hover

//   --- onload => when the loading of the page or ele ends
//   --- onscroll => when u scroll
//   --- onresize => when the window size changes

//   --- onfocus => when u focus on input
//   --- onblur => when u focus on  input
//   --- onsubmit => when u submit the information
// */

// // let myBtn = document.getElementById("btn")

// // // myBtn.onclick = function () {
// // //   console.log(`Click`)
// // // }
// // myBtn.onmouseenter = function () {
// //   console.log(`Click`)
// // }

// /*
//   DOM [Event]
//   - Validate From Practice
//   - Prevent Default
// */

// // let userInput = document.querySelector("[name='username']");
// // let ageInput = document.querySelector("[name='age']");

// // document.forms[0].onsubmit = function (e) {
// //   let userValid = false;
// //   let ageValid = false;

// //   if (userInput.value !== "" && userInput.value.length <= 10) {
// //     userValid = true;
// //   }

// //   if (ageInput.value !== "") {
// //     ageValid = true;
// //   }

// //   if (userValid === false || ageValid === false) {
// //     e.preventDefault();
// //   }
// // };

// // document.links[0].onclick = function (eve) {
// //   console.log(eve);
// //   eve.preventDefault();
// // };

// // /*
// //   DOM [Event Simulation]
// //   - click
// //   - focus
// //   - blur
// // */

// // let two = document.querySelector(".two");
// // let one = document.querySelector(".one");

// // window.onload = function () {
// //   two.focus();
// // };

// // one.onblur = function () {
// //   document.links[1].click();
// // };

// /*
//   DOM [Class List]
//   - classList
//   --- length
//   --- contains
//   --- item (by index)
//   --- add
//   --- remove
//   --- toggle => +- at the same time

// 096

//   DOM [CSS]
//   - style
//   - cssText
//   - removeProperty (PropertyName) [Inline, Stylesheet]
//   - setProperty (PropertyName, Value, Priority)

// 097

//   DOM [Deal With Elements]
//   - before [Element || String]
//   - after [Element || String]
//   - append [Element || String]
//   - prepend [Element || String]
//   - remove
// */

// // let element = document.getElementById("my-div");

// // console.log(element.classList);
// // console.log(typeof element.classList);
// // console.log(element.classList.contains("MJD"));
// // console.log(element.classList.contains("show"));
// // console.log(element.classList.item("3"));

// // element.onclick = function () {
// //   this.classList.add("C-one", "C-two") +
// //     this.classList.remove("one", "two") +
// //     this.classList.toggle("show");
// // };

// // //096

// // element.style.color = "red"
// // element.style.fontWeight = "bold"

// // element.style.cssText = "font-weight: bold; color: #009066; opacity: .9"

// // element.style.removeProperty("color")
// // element.style.setProperty("font-size", "40px")

// // document.styleSheets[0].rules[0].style.removeProperty("line-height")
// // document.styleSheets[0].rules[0].style.setProperty("background-color", "#006033", "important")

// // //097

// // let createdP = document.createElement("p")

// // element.before("createdP")
// // element.after(createdP)
// // element.append(createdP)
// // element.prepend(" HI")
// // element.remove()

// /*
//   DOM [Traversing]
//   - nextSibling
//   - previousSibling
//   - nextElementSibling
//   - previousElementSibling
//   - parentElement
// */

// // let span = document.querySelector(".two")

// // console.log(span.nextSibling)
// // console.log(span.nextElementSibling)

// // console.log(span.previousSibling)
// // console.log(span.previousElementSibling)

// // span.onclick = function () {
// //   this.parentElement.style.opacity = 0
// // }

// /*
//   DOM [Cloning]
//   - CloneNode (Deep)
// */

// // let myP = document.querySelector("p").cloneNode(true)
// // let myD = document.querySelector("div")

// // myP.id = `${myP.id}-clone`

// // myD.appendChild(myP)

// /*
//   DOM [Add Event Listener]
//   - addEventListener
//   - Use Without On
//   - Attach Multiple Events
//   - Error Test

//   Search
//   - Capture & Bubbling JavaScript
//   - removeEventListener
// */

// // let myP = document.querySelector("p");

// // myP.onclick = one
// // myP.onclick = two

// // function one() {
// //   console.log("Massage From onClick 1")
// // }

// // function two() {
// //   console.log("Massage From onClick 2")
// // }

// // window.onload = "MJD"

// // myP.addEventListener("click", function () {
// //   console.log("Massage From onClick 1 aEvL")
// // })

// // myP.addEventListener("click", one)
// // myP.addEventListener("click", two)

// // myP.addEventListener("click", "String") // ERROR

// // myP.addEventListener("click", function () {
// //   let newP = myP.cloneNode(true)
// //   newP.className =`cloneP`
// //   document.body.appendChild(newP)
// // })

// // // let cloned = document.querySelector(".clone"); // Error

// // // cloned.onclick = function () {
// // //   console.log("Iam Cloned");
// // // };

// // document.addEventListener("click", function (e) {
// //   if (e.target.className === `cloneP`) {
// //     console.log(`I'm Cloned!`)
// //   }
// // })

// /*
//   DOM challenge
// */

// // //Body

// // document.body.style.cssText =
// //   "margin: 0px; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial;";

// //Header

// // let Header = document.createElement("header");
// // Header.className = `website-header`;

// // let elZ = document.createElement("h3");
// // let elZTxt = document.createTextNode("ELzero");

// // let navList = document.createElement("ul");
// // navList.className = `menu`;

// // let li1 = document.createElement("li");
// // let li1TXT = document.createTextNode("Home");
// // li1.appendChild(li1TXT);

// // let li2 = document.createElement("li");
// // let li2TXT = document.createTextNode("About");
// // li2.appendChild(li2TXT);

// // let li3 = document.createElement("li");
// // let li3TXT = document.createTextNode("Service");
// // li3.appendChild(li3TXT);

// // let li4 = document.createElement("li");
// // let li4TXT = document.createTextNode("Contact");
// // li4.appendChild(li4TXT);

// // elZ.appendChild(elZTxt);

// // navList.appendChild(li1);
// // navList.appendChild(li2);
// // navList.appendChild(li3);
// // navList.appendChild(li4);

// // Header.appendChild(elZ);
// // Header.appendChild(navList);

// // Header.style.cssText =
// //   "display: flex; justify-content: space-between; align-items: center; padding: 20px 30px; background-color: #c4c4c4; border-bottom: 1px solid #ddd;";

// // elZ.style.cssText =
// //   "color: #02975e; font-size: 28px; font-weight: bold; margin: 0; font-family: Tahoma, Arial;";

// // navList.style.cssText =
// //   "display: flex; list-style: none; margin: 0; padding: 0; gap: 30px;";

// // [li1, li2, li3, li4].forEach((li) => {
// //   li.style.cssText =
// //     "color: #666; font-size: 16px; cursor: pointer; text-decoration: none;";
// // });

// // document.body.appendChild(Header);

// // //content

// // let contentS = document.createElement("section");
// // contentS.className = `content`;
// // contentS.style.cssText =
// //   "display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; padding: 25px; background-color: rgb(236, 236, 236);";

// // for (let i = 1; i <= 15; i++) {
// //   let productsRec = document.createElement("div");
// //   productsRec.style.cssText =
// //     "background-color: #a2a2a2; padding: 10px; text-align: center; border-radius: 8px;";

// //   let RecNums = document.createElement("span");
// //   RecNums.style.cssText =
// //     "font-size: 38px; font-weight: bold; display: block; margin-bottom: 10px; margin-top: 10px;";
// //   RecNums.appendChild(document.createTextNode(`${i}`));

// //   let RecTXT = document.createElement("span");
// //   RecTXT.style.cssText = "color: #55566; font-size: 16px;";
// //   RecTXT.appendChild(document.createTextNode("product"));

// //   productsRec.appendChild(RecNums);
// //   productsRec.appendChild(RecTXT);
// //   contentS.appendChild(productsRec);
// // }

// // document.body.appendChild(contentS);

// // //Footer

// // let FooterC = document.createElement("footer");
// // FooterC.className = "footer";

// // let FooterTXT = document.createTextNode("Copyright 2026");

// // FooterC.appendChild(FooterTXT);

// // FooterC.style.cssText =
// //   "background-color: #02975e; font-size: 20px; text-align: center; padding: 15px; color: white;";

// // document.body.appendChild(FooterC);

// /*
//   BOM [Browser Object Model]
//   - Introduction
//   --- Window Object Is The Browser Window
//   --- Window Contain The Document Object
//   --- All Global Variables And Objects And Functions Are Members Of Window Object
//   ------ Test Document And Console
//   - What Can We Do With Window Object ?
//   --- Open Window
//   --- Close Window
//   --- Move Window
//   --- Resize Window
//   --- Print Document
//   --- Run Code After Period Of Time Once Or More
//   --- Fully Control The URL
//   --- Save Data Inside Browser To Use Later
// */

// // console.log("anyThing") = window.console.log("anyThing")

// window.document.title = "Hello JS";

// /*
//   BOM [Browser Object Model]
//   - alert (Massage) => Need No Response Only OK Available
//   - confirm (Massage) => Need Response & Return A Boolean
//   - prompt (Massage, Default Massage) => Collect Data

//   Search
//   - sweetalert2
// */

// // alert("Test");
// // console.log("Test")

// // let confirmMsg = confirm("Are U Sure??")

// // console.log(confirmMsg)

// // if (confirmMsg === true) {
// //   console.log("Deleted")
// // } else {
// //   console.log("Not Deleted")
// // }

// // let promptMsg = prompt("witch time??", "Like X p/AM")

// // console.log(promptMsg)

// /*
//   BOM [Browser Object Model]
//   - setTimeout (Function, Timeout, Additional Params)
//   - clearTimeout (Identifier)
// */

// // setTimeout(() => {
// //   console.log("Massage")
// // }, 3000);

// // setTimeout(syaMsg, 3000);

// // function syaMsg() {
// //   console.log(`I'm Massage`)
// // }

// // setTimeout(syaMsg, 3000, "MJD", 16);

// // function syaMsg(user, age) {
// //   console.log(`I'm Massage For ${user}, His Age Is ${age}`)
// // }

// // let handler = setTimeout(syaMsg, 3000);

// // function syaMsg() {
// //   console.log(`I'm Massage`)
// // }

// // console.log(handler)

// // let btn = document.querySelector("button")

// // btn.onclick = function () {
// //   clearTimeout(handler)
// // }

// /*
//   BOM [Browser Object Model]
//   - setInterval(Function, Milliseconds, Additional Params)
//   - clearInterval(Identifier)
// */

// // setInterval(() => {
// //   console.log(`Msg`);
// // }, 1000);

// // setInterval(sayMsg, 1000);

// // function sayMsg() {
// //   console.log(`Iam Message`);
// // }

// // setInterval(sayMsg, 1000, "Osama", 38);

// // function sayMsg(user, age) {
// //   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// // }

// //   let div = document.querySelector("div")

// //   function countDown() {
// //   div.innerHTML -= 1
// //   if (div.innerHTML === "0") {
// //     clearInterval(Counter)
// //   }
// // }

// // let Counter = setInterval(countDown, 1000);

// /*
//   BOM [Browser Object Model]
//   - location Object
//   --- href Get / Set [URL || Hash || File || Mail]
//   --- host
//   --- hash
//   --- protocol
//   --- reload()
//   --- replace()
//   --- assign()
// */

// console.log(location);
// console.log(location.href);

// // location.href = "https://google.com"
// // location.href = "/#sec02";
// // location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// // console.log(location.host);
// // console.log(location.hostname);

// // console.log(location.protocol);

// // console.log(location.hash);

// // location.replace()

// // location.assign()

// /*
//   BOM [Browser Object Model]
//   - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
//   - close()
//   - Window Features
//   --- left [Num]
//   --- top [Num]
//   --- width [Num]
//   --- height [Num]
//   --- menubar [yes || no]

//   Search
//   - Window.Open Window Features
// */

// // setTimeout(function () {
// //   window.open("", "_self", "", false);
// // }, 2000);

// // setTimeout(function () {
// //   window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
// // }, 2000);

// /*
//   BOM [Browser Object Model]
//   - History API
//   --- Properties
//   ------ length
//   --- Methods
//   ------ back()
//   ------ forward()
//   ------ go(Delta) => Position In History

//   Search [For Advanced Knowledge]
//   - pushState() + replaceState()
// */

// console.log(history);

// /*
//   BOM [Browser Object Model]
//   - stop()
//   - print()
//   - focus()
//   - scrollTo(x, y || Options)
//   - scroll(x, y || Options)
//   - scrollBy(x, y || Options)
// */

// // let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// // window.scrollTo({
// //   left: 500,
// //   top: 200,
// //   behavior: "smooth"
// // });

// /*
//   BOM [Browser Object Model]
//   - Practice => Scroll To Top
//   - scrollX [Alias => PageXOffset]
//   - scrollY [Alias => PageYOffset]
// */

// // console.log(window.scrollX === window.pageXOffset);

// // let btn = document.querySelector("button");

// // window.onscroll = function () {
// //   if (window.scrollY >= 600) {
// //     btn.style.cssText = "display: block; cursor: pointer";
// //   } else {
// //     btn.style.cssText = "display: none";
// //   }
// // };

// // btn.onclick = function () {
// //   window.scrollTo({
// //     top: 0,
// //     behavior: "smooth",
// //   });
// // };

// /*
//   BOM [Browser Object Model]
//   Local Storage
//   - setItem
//   - getItem
//   - removeItem
//   - clear
//   - key

//   Info
//   - No Expiration Time
//   - HTTP And HTTPS
//   - Private Tab
// */

// // // Set
// // window.localStorage.setItem("color", "#F00")
// // window.localStorage.fontWeight = "bold"
// // window.localStorage["fontSize"] = "20px"

// // // Get
// // console.log(window.localStorage.getItem("color"))
// // console.log(window.localStorage.color)
// // console.log(window.localStorage[`color`])

// // // Remove 1 by 1
// // window.localStorage.removeItem("color")

// // // Clear All
// // window.localStorage.clear()

// // // Get Key
// // // console.log(window.localStorage.key(0))

// // // Set Key In The Page
// // document.body.style.backgroundColor = window.localStorage.getItem("color")

// // console.log(window.localStorage)
// // console.log(typeof window.localStorage)

// /*
//   BOM [Browser Obj Model]
//   Local Storage Practice
// */

// // let lis = document.querySelectorAll("ul li")
// // let exp = document.querySelector(".experiment")

// // if (window.localStorage.getItem("color")) {
// //   exp.style.backgroundColor = window.localStorage.getItem("color")
// //   lis.forEach((li) => {
// //       li.classList.remove("active")
// //     })
// //     document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active")
// // }

// // lis.forEach((li) => {
// //   li.addEventListener("click", (e) => {
// //     lis.forEach((li) => {
// //       li.classList.remove("active")
// //     })
// //     lis.forEach((li) => {
// //       e.currentTarget.classList.add("active")
// //     })
// //     window.localStorage.setItem("color", e.currentTarget.dataset.color)
// //     exp.style.backgroundColor =  e.currentTarget.dataset.color
// //   })
// // })

// /*
//   BOM [Browser Object Model]
//   Session Storage
//   - setItem
//   - getItem
//   - removeItem
//   - clear
//   - key

//   Info
//   - New Tab = New Session
//   - Duplicate Tab = Copy Session
//   - New Tab With Same Url = New Session
// */

// // window.localStorage.setItem("color", "red");
// // window.sessionStorage.setItem("color", "blue");

// //

// /*
//   BOM [Browser Object Model]
//   To DO
// */

// // let form = document.querySelector("form")
// // let input = document.querySelector(".text")
// // let submit = document.querySelector(".add")
// // let tasksDiv = document.querySelector(".tasks")
// // let delAll = document.querySelector(".delete-all")

// // let tasksArray = []

// // if (localStorage.getItem("tasks")) {
// //   tasksArray = JSON.parse(localStorage.getItem("tasks"))
// // }

// // getDataFromLCS()

// // form.onsubmit = function (e) {
// //   e.preventDefault()
// //   if (input.value !== "") {
// //     addTaskToArray(input.value)
// //     input.value = ""
// //   } else {
// //   }
// // }

// // tasksDiv.addEventListener("click", (e) => {
// //   if (e.target.classList.contains("del")) {
// //     deleteTaskWith(e.target.parentElement.getAttribute("data-id"))
// //     e.target.parentElement.remove()
// //   }

// //   if (e.target.classList.contains("task")) {
// //     toggleTaskSWith(e.target.getAttribute("data-id"))
// //     e.target.classList.toggle("done")
// //   }
// // })

// // delAll.addEventListener("click",(e) => {
// //   if (e.target.classList.contains("delete-all")) {
// //     tasksDiv.innerHTML = "";
// //     tasksArray = []
// //     localStorage.removeItem('tasks')
// //   }
// // })

// // function addTaskToArray(taskTXT) {
// //   const task = {
// //     id: Date.now(),
// //     title: taskTXT,
// //     completed: false,
// //   }
// //   tasksArray.push(task)

// //   addElementsFrom(tasksArray)

// //   //LocalS
// //   addToLocSFrom(tasksArray)
// // }

// // function addElementsFrom(tasksArray) {
// //   tasksDiv.innerHTML = ""
// //   tasksArray.forEach((task) => {
// //     let div = document.createElement("div")
// //     div.className = "task"
// //     if (task.completed) {
// //       div.className = "task done"

// //     }
// //     div.setAttribute('data-id', task.id)
// //     div.appendChild(document.createTextNode(task.title))

// //     let span = document.createElement('span')
// //     span.className = "del"
// //     span.appendChild(document.createTextNode("Delete"))

// //     div.appendChild(span)

// //     tasksDiv.appendChild(div)
// //   })
// // }

// // function addToLocSFrom(tasksArray) {
// //   window.localStorage.setItem("tasks", JSON.stringify(tasksArray))
// // }
// // function getDataFromLCS() {
// //   let data = window.localStorage.getItem("tasks")
// //   if (data) {
// //     let tasks = JSON.parse(data)
// //     addElementsFrom(tasks)
// //   }
// // }

// // function deleteTaskWith(taskId) {
// //   tasksArray = tasksArray.filter((task) => task.id != taskId)
// //   addToLocSFrom(tasksArray)
// // }

// // function toggleTaskSWith(taskId) {
// //   for (let i = 0; i < tasksArray.length; i++) {
// //     if (tasksArray[i].id ==  taskId) {
// //       tasksArray[i].completed = !tasksArray[i].completed
// //     }
// //   }
// //   addToLocSFrom(tasksArray)
// // }

/*
  Destructuring
  
    " Is A JS Expressing That Allows Us To Extract Data From Arrays"
    Objects, And Maps And Set Them Into New, Distinct Variables.

  - Destructuring
  - Destructuring Array Advanced Example
  */

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let theFriends = [
//   "Ahmed",
//   "Sayed",
//   "Ali",
//   "Mays",
//   ["Shady", "Amr", ["Mohamed", "Gamal"]],
// ];

// [a = "A", b, c, d, e = "Osama"] = theFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// console.log(theFriends[4]);

// let [, y, , z] = theFriends;

// // console.log(x); // Error
// console.log(y);
// console.log(z);

// console.log(theFriends[4][2][1]);

// let [, , , , [r, , [, s]]] = theFriends;

// console.log(r);
// console.log(s);

// // - Destructuring Array => Swapping Variables

// let book = "Video";
// let video = "Book";

/* 
Old
// Save book Value In Stash
let stash = book // => "Video"

// Change Book Value
book = video; // Book

// Change Video Value
video = stash; // Video
*/

// [book, video] = [video, book];

// console.log(book);
// console.log(video);

/*
  - Destructuring Object
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// // console.log(user.theName)
// // console.log(user.theAge);
// // console.log(user.theTitle);
// // console.log(user.theCountry);

// // let theName = user.theName
// // let theAge = user.theAge
// // let theTitle = user.theTitle
// // let theCountry = user.theCountry

// // console.log(theName)
// // console.log(theAge);
// // console.log(theTitle);
// // console.log(theCountry);

// // ({theName, theAge, theTitle, theCountry} = user); // If it Declared , Without ( ) Gives ERRor

// const {
//   theName: N,
//   theAge,
//   theCountry,
//   theColor: co = "red",
//   skills: { html: h , css:Cs},
// } = user;

// console.log(N);
// console.log(theAge);
// console.log(theCountry);
// console.log(co);
// console.log(`Ur HTML Skill Progress Is ${h}`);
// console.log(`Ur Css Skill Progress Is ${Cs}`);

// const {html:skillOne, css:skillTwo} = user.skills

// console.log(skillOne)
// console.log(skillTwo)

/*
  Destructuring
  - Destructuring Function Parameters
*/

const user = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

function showDetails({ theName: N, theAge: A, skills: { css: CS } } = user) {
  console.log(`Your Name Is ${N}`);
  console.log(`Your Age Is ${A}`);
  console.log(`Your CSS Skill Progress Is ${CS}`);
}

/*
  Destructuring
  - Destructuring Mixed Content
*/

const Usser = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const {
  theName: n,
  theAge: ag,
  skills: [, , three],
  addresses: { egypt: eg },
} = Usser;

console.log(`Your Name Is: ${n}`);
console.log(`Your Age Is: ${ag}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${eg}`);

/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

const {
  title: T,
  age: Ag,
  available: ava,
  skills: [, Last],
} = myFriends[chosen - 1];

console.log(T);
console.log(Ag);
console.log(ava);
console.log(Last);
//

/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
let myUniqueData = new Set(myData);
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();
// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);
myUniqueData.delete(1);
console.log(myUniqueData.has("A")); // True
console.log(myUniqueData.size);
console.log(myUniqueData);

myUniqueData.clear();

console.log(myUniqueData.size);
console.log(myUniqueData);

console.log(myData[0]);
console.log(myUniqueData[0]);

console.log(myUniqueData.has("A")); // False Cause Of The Clear Above
//

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("__".repeat(20));

// Type Of Data

let myWS = new WeakSet([{ A: 1, B: 2 }]);

console.log(myWS);
//

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myOBJ = {};
let myEmptyOBJ = Object.create(null);
let myMAP = new Map();

console.log(myOBJ);
console.log(myEmptyOBJ);
console.log(myMAP);

let myNewObject = {
  10: "Number",
  10: "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);
//

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

myMap.set(10, "Number");
myMap.set("Name", "String");

console.log(myMap);

console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log("####");

console.log(myMap.has(false));
console.log(myMap.has("name"));
console.log(myMap.has("Name"));

console.log("####");

console.log(myMap.size);

console.log(myMap.delete("Name")); // true => successfully deleted

console.log(myMap.size);

myMap.clear();

console.log(myMap.size);

console.log("___".repeat(15));
//

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let mymap = new Map();

mymap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(mymap);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");
// myWeakMap.set("wMapUser", "Object Value"); // ERROR

wMapUser = null; // Override The Reference

console.log(myWeakMap);
//

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
console.log(Array.from("12345", (n) => +n + +n));
console.log(Array.from(12345));

let myArray = [1, 1, 1, 2, 3, 4];

const myset = new Set(myArray);

console.log(myset);

console.log(Array.from(myset));

console.log([new Set(myArray)])
console.log([...new Set(myArray)])

function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "MJD", "YOU", 1, 2, 3))
//

/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myarray = [10, 20, 30, 40, 50, "A", "B"];

// myarray.copyWithin(3) // [10, 20, 30, 10, 20, 30, 40]

// myarray.copyWithin(4, 6) // [10, 20, 30, 40, "B", "A", "B"]

// myarray.copyWithin(4, -1) // [10, 20, 30, 40, "B", "A", "B"]

// myarray.copyWithin(1, -2) // [10, "A", "B", 40, 50, "A", "B"]

myarray.copyWithin(1, -2, -1) // [10, "A", 30, 40, 50, "A", "B"]

console.log(myarray)
//

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNum = 10;

let check = nums.some((e) => e > this, myNum);

// let check = nums.some((e) => e > 5);

console.log(check)

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val
  })
}

console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};

let checkRng = nums.some(function (e) {
  return e >= this.min && e <= this.max
}, range)

console.log(checkRng)
//

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations).map((n) => +n);

console.log(locationsArray)

let Check = locationsArray.every((ele) => ele > mainLocation)

console.log(Check)
//


/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3]
let myArray2 = [4, 5, 6]

let allArrays = [...myArray1, ...myArray2]

console.log(allArrays)

// Copy Array

let copiedArray = [...myArray1]
console.log(copiedArray)

// Push Inside Array

let allFriends = ["Ibrahem", "Mustafa"]
let newFriends = ["Noor"]

allFriends.push(...newFriends)

console.log(allFriends)

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500, ];
console.log(Math.max(...myNums))

// Spread With Objects => Merge Objects

let Obj1 = {
  a:1, 
  b:2
}

let Obj2 = {
  c:3, 
  d:4
}

console.log({...Obj1,...Obj2, e : 5 })
//

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log((new Set(n2).size + n1.length) * Math.max(...n2)); // 210
//


/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/

// let str1 = '10 20 100 1000 5000';
// let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

// let invalidEmail = `Osama@@@gmail....com`
// let validEmail = `O@nn.sa`

// let ip = '192.168.2.1'; // IPv4

// let url = 'elzero.org';
// let url = 'elzero.org/';
// let url = 'http://elzero.org/';
// let url = 'http://www.elzero.org/';
// let url = 'https://.elzero.org/';
// let url = 'https://www.elzero.org/';
// let url = 'https://www.elzero.org/?facebookid=asdasdasd';
//

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => multiLines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let mystring = "Hello Elzero Web School I Love elzero";

let regex = /elzero/ig;

console.log(mystring.match(regex)) 
//

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice
  
*/


let tld = "Com Net Org Info Code Io"

let tldRe = /(org|info|io)/ig

console.log(tld.match(tldRe))


let numS = "12345678910"
let numSRe = /[0-2]/g
console.log(numS.match(numSRe))

let notNumS = "12345678910"
let notNumSRe = /[^0-2]/g
console.log(notNumS.match(notNumSRe))

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));


let practice = "Os1 Os1Os Os2 Os8 Os8Os";

let practiceRe = /[5-9]os/ig

console.log(practice.match(practiceRe));

/*
- Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/
let myString = "AaBbcdefG123!234%^&*";

let aTozS = /[a-z]/g
console.log(myString.match(aTozS))

let NotaTozS = /[^a-z]/g
console.log(myString.match(NotaTozS))

let AToZC = /[A-Z]/g
console.log(myString.match(AToZC))

let NotAToZC = /[A-Z]/g
console.log(myString.match(NotAToZC))

let aAndcAnde = /[ace]/g;
console.log(myString.match(aAndcAnde));

let NotaAndcAnde = /[^ace]/g;
console.log(myString.match(NotaAndcAnde));

let lettersCAndS = /[a-zA-Z]/g;
console.log(myString.match(lettersCAndS));

let numsAndSpecials = /[^a-zA-Z]/g;
console.log(myString.match(numsAndSpecials));

let specials = /[^a-zA-Z0-9]/g;
console.log(myString.match(specials));
//

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';

let dot = /./g;
console.log(email.match(dot))

let word = /\w/g;
console.log(email.match(word))

let Word = /\W/g;
console.log(email.match(Word))

let valid = /\w@\w.(com|net)/g
console.log(email.match(valid))
//

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

let re = /\bspam|spam\b/ig
console.log(names.match(re))

console.log(re.test(names));
console.log(/(\bspam|spam\b)/ig.test("Osama" && "Sayed" && "Aspamo"));
console.log(/(\bspam|spam\b)/ig.test("Spam5"));
//

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(net|com)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));

let numss = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numssRe = /0\d*0/ig
console.log(numss.match(numssRe));

let urls = "https://google.com http://www.website.net web.com logo.net"; // http + https
let urlsRe = /(https?:\/\/(www.)?)?\w+.\w+/ig
console.log(urls.match(urlsRe))
//

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S
//

/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myStringg = "We Love Programming";
let namess = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myStringg));
console.log(/^we/ig.test(myStringg));
console.log(/lz$/ig.test(namess));
console.log(/^\s/ig.test(namess));

console.log(namess.match(/\d\w{5}(?=z)/ig));
console.log(namess.match(/\d\w{8}(?!z)/ig));
//

/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";

console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));

let Re = /@/ig
console.log(txt.replace(Re, "JavaScript"));
console.log(txt.replaceAll(/@/ig, "JavaScript"));
//

/*
  Regular Expression
  - Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phonRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phonRe.test(phoneInput)
  console.log(validationResult)
  if (validationResult === false) {P
    return false
  }
  return true;
}
//

/*
  Search
  
  -Regexr
  -RegExTester
  -RegEx101

  to look up for regex | test yours
*/
//

/*
  Regular Expression
  - Challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url7 = 'https://www.elzero.org.net';
let url5 = 'https://www.elzero.org/articles.php?id=100&cat=topics';
let url6 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let rE = /(https?:\/\/)?(www.)?\w+.\w+(.\w+)?(:\d{4})?(\/\w+)?(.\w+)?((.\w+)?=(\W+|\w+)+.)?/ig;

console.log(url1.match(rE));
console.log(url2.match(rE));
console.log(url3.match(rE));
console.log(url4.match(rE));
console.log(url7.match(rE));
console.log(url5.match(rE));
console.log(url6.match(rE));
//


/*
  P1
  Constructor Function

  P2
  - New Syntax

  P3
  - Deal With Properties And Methods

  P4
  - Update Properties
  - Built In Constructors

  P5
  - Static Properties And Methods

  P6
  - Inheritance
*/

// function Userr(id, us, sa){
//   this.i = id;
//   this.u = us;
//   this.s = sa + 1000;
// }

// class Userr {
//   static count = 0;
//   // count = 0;

//   constructor(id, us, sa) {
//     //Properties
//     this.i = id;
//     this.u = us || "Unknown";
//     this.s = sa < 6000 ? sa + 500 : sa;
//     Userr.count++;
//     this.msg = function () {
//       return `Hello ${this.u} Your Salary Is ${this.s}`;
//     }
//   }

//   //Methods
//   Mmsg() {
//     return `Hello ${this.u} Your Salary Is ${this.s}`;
//   }
//   updateUs(newUs) {
//     this.u = newUs
//   }
  
//   // Static Methods
//   static sayHello() {
//     return `Hello From Class`;
//   }
//   static countM() {
//     return `${this.count} Members Created`
//   }
// }

// // Parent Class
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// // Derived Class
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username)
//     this.p = permissions;
//   }
// }

// class Superman extends Admin {
//   constructor(id, username, permissions, ability) {
//     super(id, username, permissions);
//     this.a = ability;
//   }
// }

// let user1 =  new User(100, "Elzero", 5000)
// let admin1 = new Admin(110, "Mah", 1)
// // let user2 =  new Userr(101, "", 6000)
// // let user3 =  new Userr(102, "Sayed", 7000)

// console.log(user1.u)
// console.log(user1.sayHello())
// console.log("___".repeat(5))
// console.log(admin1.i)
// console.log(admin1.u)
// console.log(admin1.p)
// console.log(admin1.sayHello())
// console.log(user1.i)
// user1.updateUs("Osama")
// console.log(user1.u)
// console.log(user1.s)
// console.log(user1.msg())
// console.log(user1.Mmsg())
// console.log(user1.count)

// console.log(Userr.count)
// console.log(Userr.sayHello())
// console.log(Userr.countM())

// console.log(user1 instanceof Userr)
// console.log(user1.constructor === Userr)

// console.log(user2.i)
// console.log(user2.u)
// console.log(user2.s)
// console.log(user2.msg) // Native Code
// console.log(user2.Mmsg) // Native Code 

// let strOne = "Elzero";
// let strTwo = new String("Elzero");

// console.log(typeof strOne); // Str
// console.log(typeof strTwo); // Obj

// console.log(strOne instanceof String); // F
// console.log(strTwo instanceof String); // T

// console.log(strOne.constructor === String); // T
// console.log(strTwo.constructor === String); // T

// console.log(user3.i)
// console.log(user3.u)
// console.log(user3.s)

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };
//

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

// class User {
//   #e;
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getSa() {
//     return parseInt(this.#e)
//   }
// }

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u);

// console.log(userOne.getSa() * .3);
// //

/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.

  - Add To Prototype Chain
  - Extend Built In Constructors Features

*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne1 = new User(100, "Elzero");
console.log(userOne1.u);

console.log(User.prototype);

console.log(userOne1);

User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
}

Object.prototype.love = "Elzero Web School";


String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
}

let mysString = "Elzero";

// let str1 = 'Elzero'

// console.log(String.prototype);
//

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(myObject, 'c', {
//   writable: false,
//   enumerable: true,
//   configurable: true, // if it was false , u wont be able to redefine it or delete it or change anything at the prop
//   value:3
// })

// myObject.c = 100; // it will be 100  when it's writeable

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]); // if its enumerable the loop will get it, else it wont
// }

// console.log(delete myObject.c)

// console.log(myObject)
// //

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject);

console.log(Object.getOwnPropertyDescriptor(myObject, 'd'));
console.log(Object.getOwnPropertyDescriptors(myObject));
//


/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let DateNow = new Date();

console.log(DateNow);

console.log(Date.now())

let sec = Date.now() / 1000;
console.log(`Seconds ${sec}`)

let minutes = sec / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);
//


/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based [In Index]
  - getDay() => Day Of The Week Zero Based, Starts FromSum
  - getHours()
  - getMinutes()
  - getSeconds()
*/

const MS_IN_A_YEAR = 1000 * 60 * 60 * 24 * 365;


let dateNow = new Date();
let birthday = new Date("Jun 24, 10");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / MS_IN_A_YEAR);

console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
//

/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let date_Now = new Date();
console.log(date_Now);

console.log("#".repeat(66));

// date_Now.setTime(0)
// console.log(date_Now);

// console.log("#".repeat(66));

// date_Now.setTime(10000)
// console.log(date_Now);

// console.log("#".repeat(66));

// date_Now.setDate(35)
// console.log(date_Now);

// date_Now.setFullYear(2026, 10, 19)
// console.log(date_Now);

// date_Now.setFullYear(2026, 10, 19)
// console.log(date_Now);

// date_Now.setMonth(12, 1)
// console.log(date_Now);

// etc
//

/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Jun 24, 10"))

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(1277326800000);
console.log(date2);

let date3 = new Date('7/24/2010');
console.log(date3);

let date4 = new Date('2010-7-24');
console.log(date4);

let date5 = new Date('2010 7');
console.log(date5);

let date6 = new Date('2010');
console.log(date6);

let date7 = new Date('82');
console.log(date7);

let date8 = new Date(2010, 6, 24, 15, -30);
console.log(date8);

let date9 = new Date("2010-07-24T02:30:00");
console.log(date9);
//

/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time

let start = new Date();

// Operation

for (let i = 0; i < 101; i++) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div)
  
}

// Time End

let end = new Date()

// Operation Duration

let duration = end - start

console.log(duration)
//

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

// function* genNums() {
//   yield 1;
//   console.log('Hello after Yield 1')
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let generator = genNums()

// console.log(typeof generator)
// console.log(generator)
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// for (let value of genNums()) {
//   console.log(value)
// }

// for (let value of generator) {
//   console.log(value)
// }
// //

/*
  Generators
  - Delegate Generator
*/

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }

// function* generateAll() {
//   // yield generateNums();
//   yield* generateNums();
//   yield* generateLetters();
//   yield* [4, 5, 6];
//   // yield [4, 5, 6];
// }
// let Generator = generateAll()

// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// // console.log(Generator.return("Z"))
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())

// //

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

function* generateNumbers() {
  // yield 1;
  // yield 2;
  // return "A";
  // yield 3;
  // yield 4;
  let index = 0;

  while (true) {
    yield index++;
  }
}

let generator = generateNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
//


/*
  Modules
  - Import And Export
*/

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something`;
// }

// export { a as myN, arr, saySomething };

// export default function () {
//   return `Hi`
// }
// //


/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================

  =======================
  
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null
  
  =======================

  JSON
  - API Overview
  - Tools To Test API
  - Preview Github API

*/

/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server
const myJsonObjFromS = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjFromS)
console.log(myJsonObjFromS)

// Convert To JS Object
const myJsObj = JSON.parse(myJsonObjFromS)
console.log(typeof myJsObj)
console.log(myJsObj)

// Update Data
myJsObj ["Username"] = "MJD"
myJsObj ["Age"] = 16

// Send To Server
const myJsonObjToS = JSON.stringify(myJsObj)
console.log(typeof myJsonObjToS)
console.log(myJsonObjToS)
//

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");


// Asynchronous

console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000)
console.log("3");


/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

// setTimeout(() => {
//   console.log("Web API");
// }, 0);

// function one() {
//   console.log("one");
// };

// function two() {
//   one();
//   console.log("two");
// };

// function thre3() {
//   two();
//   console.log("thre3");
// };

// thre3();

/*
=================================
console.log("One");
=================================
function one() {
  console.log("One");
}
=================================
function two() {
  one();
  console.log("Two");
}
=================================
function three() {
  two();
  console.log("Three");
}
=================================
*/

// console.log("#####")
// console.log("one")
// console.log("two")
// console.log("thre3")


/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Popped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout|Fetch Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

// console.log("one")
// setTimeout(() => {
//   console.log("three")
// },0)
// setTimeout(() => {
//   console.log("Four")
// },0)
// console.log("two")

// setTimeout(() => {
//   console.log(myVar);
// }, 0);

// let myVar = 100;
// myVar += 100;
// //

/*
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code

======================================

  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found



  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication

*/

// setTimeout(() => {
//   let req = new XMLHttpRequest();
//   req.open("GET", "https://api.github.com/users/elzerowebschool/repos",)
//   req.send()
//   console.log(req);
  
//   req.onreadystatechange = function () {
//     console.log(req.readyState);
//     console.log(req.status);
//     if (this.readyState === 4 && this.status === 200) {
//       // console.log(this.responseText)
//       let jsData = JSON.parse(this.responseText)
//       // console.log(jsData)
//       for (let i = 0; i < jsData.length; i++) {
//         let div = document.createElement("div")
//         let repoN = document.createTextNode(jsData[i].full_name)
//         div.appendChild(repoN)
//         document.body.appendChild(div)
//       }
//     }
//   }
// }, 0)
// //

/*
  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

// function makeItRed(e) {
//   e.target.style.color = "red";
// }

// let p = document.querySelector(".test")
// p.addEventListener("click", makeItRed)

// function iamACallback() {
//   console.log("Iam A Callback Function");
// }

// setTimeout(iamACallback, 900);

// setTimeout(() => {
//   console.log("Download Photo From URL")
//   setTimeout(() => {
//     console.log("Resize Photo")
//     setTimeout(() => {
//       console.log("Add Logo To The Photo")
//       setTimeout(() => {
//         console.log("Show The Photo In Website")
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise( (ResolvedF, RejectedF) => {
//   let connect = false;
//   if (connect) {
//     ResolvedF("Connection Established")
//   } else {
//     RejectedF(Error("Connection Failed"))
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// )

// const myPromise = new Promise( (ResolvedF, RejectedF) => {
//   let connect = true;
//   if (connect) {
//     ResolvedF("Connection Established")
//   } else {
//     RejectedF(Error("Connection Failed"))
//   }
// })

// console.log(myPromise)

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// )

// let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
// let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`)

// myPromise.then(resolver, rejecter)

// myPromise.then(resolver, rejecter)

/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successful Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successful Or Failed Finally Do Something
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let employees = []
//   if (employees.length === 4) {
//     resolveFunction(employees)
//   } else {
//     rejectFunction(Error("They're not 4!"))
//   }
// });

// myPromise.then(
//   (resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue
//   }
// ).then(
//   (resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue
//   }
// ).then(
//   (resolveValue) => {
//     console.log(`The Chosen one is ${resolveValue}`)
//   }
// ).catch((rejectedRe) => {
//   console.log(rejectedRe)
// }).finally(console.log("The Operation Is Done"));

/*
  Promise And XHR
*/

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };


// getData("https://api.github.com/users/elzerowebschool/repos").then(
//   (result) => {
//     result.length = 10
//     return result
//   }
// ).then((result) => console.log(result[0].name)).catch((rej) => console.log(rej))

// "https://api.github.com/users/elzerowebschool/repos"

// let jsData = JSON.parse(this.responseText)
// for (let i = 0; i < jsData.length; i++) {
//   let div = document.createElement("div")
//   let repoName = document.createTextNode(jsData[i].name)
//   div.appendChild(repoName)
//   document.body.appendChild(div)
// }

/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

// fetch(`https://api.github.com/users/WMJD10/repos`).then((result) => {
//   console.log(result);
//   let myData = result.json();
//   console.log(myData);
//   return myData;
// }).then((full) => {
//   full.length = 10;
//   return full
// }).then((ten) => {
//   console.log(ten[0].name)
// })

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));
//


/*
  Promise
  - All
  - All Settled
  - Race
*/

// const my1stP = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("I'm The First P")
//   }, 5000);
// })

// const my2ndP = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("I'm The Second P")
//   }, 1000);
// })

// const my3rdP = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("I'm The Third P")
//   }, 2000);
// })

// Promise.all([my1stP, my2ndP, my3rdP]).then(
//   (res_edValues) => console.log(res_edValues), 
//   (rejValue) => console.log(`Rej ${rejValue}`)
// )

// Promise.allSettled([my1stP, my2ndP, my3rdP]).then(
//   (res_edValues) => console.log(res_edValues), 
//   (rejValue) => console.log(`Rej ${rejValue}`)
// )

// Promise.race([my1stP, my2ndP, my3rdP]).then(
//   (res_edValues) => console.log(res_edValues), 
//   (rejValue) => console.log(`Rej ${rejValue}`)
// )
// //

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// };
// getData().then(
//   (resV) => console.log(resV),
//   (rejV) => console.log(`Rej: ${rejV}`)
// );

// function getData() {
  
//   let users = [];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("NO Users Found");;
//   };

// };
// getData().then(
//   (resV) => console.log(resV),
//   (rejV) => console.log(`Rej: ${rejV}`)
// );

// async function getData() {
  
//   let users = ["M"];
//   if (users.length > 0) {
//     return ("Users Found");
//   } else {
//     throw new Error(("NO Users Found"));;
//   };

// };

// console.log(getData())

// getData().then(
//   (resV) => console.log(resV),
//   (rejV) => console.log(`Rej: ${rejV}`)
// );
// //

/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

// const myPr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Iam The Good Promise");
//     reject(Error("Iam The Bad Promise"));
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   // myPr.then((resV) => console.log(resV))
//   // console.log(await myPr)
//   console.log(await myPr.catch((err) => err))
//   console.log("After Promise");
// }

// readData();

/*
  Async & Await With Try, Catch, Finally
*/

const myProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Iam The Good Promise");
  }, 3000);
});

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

// "https://api.github.com/users/elzerowebschool/repos"

async function fetchData() {
  console.log("Before Fetch");

  try {

    let myData = await fetch("https://api.github.com/users/elzerowebschool/repos")
    console.log(await myData.json())
  } catch (reason) {
    console.log(`Reason ${reason}`)
  } finally {
    console.log("After Fetch");
  }
}

fetchData();
//


/*
  The End
  - Other Information => Practice + Tutorials
  - Problem Solving
  - Search In Lessons
  - Advanced Books

  3/10
*/


