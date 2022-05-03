/*1. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?
2. Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?

Вопрос:
Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит?
Как это исправить?
Ответ:
Выдается массив с разделителем "," - Исправить можно с помощью .join('');
*/

// var name = 'Vasya';
// var age = 30;
//
// age = {};
//
// console.log(age);

//Решение_____________________

/* var name = 'Vasya';
let age = 30;

 age = {};

 console.log(age);
*/

//______________________________________

// let a = 1;
// var b = 2;
// {
//     let a = 2;
//     var b = 5;
//     console.log(a);
//     console.log(b);
// }
//
// console.log(a);
// console.log(b);

//Решение_____________________        

//let a = 1;
//var b = 2;
//{
 //   let a = 2;
 //   var b = 5;
 //    myFunc(a,b);
 //   console.log(a, b);
//}
//function myFunc (a, b) { 
//  console.log(a, b);
//}

//______________________________________

// function passTest(result) {
//     if (result) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест');
// }
//
// passTest(false);

// function passTest(result) {
//     let firstName;
//     let yearOfBirth;
//
//     if (result) {
//         firstName = 'John';
//         yearOfBirth = 1990;
//     }
//
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест');
// }
//
// passTest(true);

//Решение_____________________      

//function passTest(result) {
   // if (result) 
  //  {
   //     var firstName = 'John';
  //      var yearOfBirth = 1990;
  //  }
  // else{ let firstName;
  //   let yearOfBirth;
   // if (result) {
   //     firstName = 'John';
    //    yearOfBirth = 1990;
  //  }}
  //   console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест');
// }
// passTest(false);
 //passTest(true);

//______________________________________

// var i = 23;
//
// for (var i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i);

// let i = 23;
//
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i);


//Решение_____________________
/*
let i = 23;
for ( i=0; i < 5; i++) {
   console.log(i);
}
*/
//______________________________________

// 'use strict';
// function a() {
//     'use strict';
//     var b = 5;
//     let c = 10;
//     d = 20;
// }
// a();
//
// // console.log(b);
// // console.log(c);
// // console.log(d);

//Решение_____________________
/*

function a1() {
     var b = 5;
     let c = 10; 
     v = 20;
 }
 a1();
 console.log(v);
*/
//______________________________________

// var firstName = 'John';
// var lastName = 'Smith';
// var yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2022 - year;
// }
//
// console.log(firstName + ' ' + lastName + ' рожден в ' + yearOfBirth + '. Ему сейчас ' + calcAge(yearOfBirth));

// const firstName = 'John';
// const lastName = 'Smith';
// const yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2022 - year;
// }
//
// console.log(`${firstName} ${lastName} рожденный в ${yearOfBirth}. Ему сейчас ${calcAge(yearOfBirth)}`);

// const str = `${firstName} ${lastName}`;
//
// console.log(str);
// console.log(str.startsWith('J'));
// console.log(str.endsWith('th'));
// console.log(str.includes('n S'));
// console.log(`${str} `.repeat(5));

//Решение_____________________
/*
var firstName = 'John';
var lastName = 'Smith';
var yearOfBirth = 1990;

 function calcAge(year) {
    return 2022 - year;
 }

console.log(firstName + ' ' + lastName + ' рожден в ' + yearOfBirth + '. Ему сейчас ' + calcAge(yearOfBirth));

console.log(`${firstName} ${lastName} рожденный в ${yearOfBirth}. Ему сейчас ${calcAge(yearOfBirth)}`);

const str = `${firstName} ${lastName}`;

 console.log(str());
 console.log(str.startsWith('J'));
 console.log(str.endsWith('th'));
 console.log(str.includes('n S'));
 console.log(`${str} `.repeat(5));
*/
//______________________________________

// const calcAge = () => {
//     return 6;
// };
// const calcAge = (x) => {
//     return 6 + x;
// };
// const calcAge = x => 6 + x;

// const calcAge = x => 6 + x;

// const calcAge = (x, y = 0) => {
//     return 6 + x - y;
// };
//
// // console.log(calcAge(4, 2));
// console.log(calcAge(4));

//Решение_____________________
/*

const calcAge = () => {
     return 6;
 };
 const calcAge1 = (x) => {
     return 6 + x;
 };
 const calcAge2 = x => 6 + x;

 const calcAge4 = x => 6 + x;

 const calcAge5 = (x,y) => {
    return 6+x-y;
 };

console.log(calcAge(4, 2));
console.log(calcAge(4));
*/
//______________________________________

// var box = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         // var _this = this;
//         // document.getElementById('green').addEventListener('click', function () {
//         //     console.log(_this);
//         //     console.log('Box number ' + _this.position + ' and color ' + _this.color);
//         // });
//         // document.getElementById('green').addEventListener('click', function () {
//         //     console.log(this);
//         //     console.log('Box number ' + this.position + ' and color ' + this.color);
//         // }.bind(this));
//         document.getElementById('green').addEventListener('click', () => {
//             console.log(this);
//             console.log('Box number ' + this.position + ' and color ' + this.color);
//         });
//     },
// };
//
// box.clickMe();
//
//Решение_____________________
/*
var box = {
    color: 'green',
     position: 1,
        clickMe: function () {
             document.getElementById('green').addEventListener('click',function (){
                console.log(this);
                console.log('Box number ' + this.position + ' and color ' + this.color);
              }.bind(this));
            document.getElementById('green').addEventListener('click', () => {
               console.log(this);
               console.log('Box number ' + this.position + ' and color ' + this.color);  
            });
        },
    };
   
    box.clickMe();
*/
//______________________________________


// var arr = ['John', 25];
// var name = arr[0];
// var age = arr[1];
//
// console.log(name, age);

// const arr = ['John', 25, true];
// // let [name, age] = arr;
// let [name,, isAdmin] = arr;
//
// // console.log(name, age);
// console.log(name, isAdmin);

// const obj = {
//     firstName: 'John',
//     lastName: 'Snow',
//     colors: ['white', 'black'],
// };
//
// // let { firstName, lastName, colors } = obj;
// //
// // console.log(firstName, lastName, colors);
//
// let { firstName: fn, lastName: ln, colors: [a, b] } = obj;
//
// console.log(fn, ln, a, b);

//Решение_____________________

/*
var arr = ['John', 25];
var age = arr[1];
var name = arr[0];

    console.log(name, age);
const obj = {
   firstName: 'John',     lastName: 'Snow',
     colors: ['white', 'black'],
 };
 let { firstName: fn, lastName: ln, colors: [a, b] } = obj;
console.log(fn, ln, a, b);
*/