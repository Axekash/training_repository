"use strict";
console.log(1);
/* 
let number = 5;
const leftBorderWidth = 1;

number = 3 + 7;
console.log(number);
 

const obj = {
    a: 50,
    
};

obj.a = 10;
console.log(obj);

console.log(name); 
var name = 'Ivan';

{
    let result = 50;

}

console.log(result);
alert(5);
[].push('a');


// Простые (примитив) значения 

// Числа

let num = 4.5;

console.log(4/0); // Infinity
console.log(-4/0); // -Infinity
console.log('string' * 9); //NaN not a number

//Строки

const persone = "Alex, 'Karina' `will go to the Sweeden` " ;

// Булевые значения

const bool = true/false;

// null & undefined

//console.log(something);

const und;
console.log(und);


// Объекты - комплексный тип данных

const obj = {
    name: "Alex",
    age: 25,
    isMaried: false,
};

//console.log(obj.name);
console.log(obj['name']);

let arr = [
    0               1               2       3   4     5   6
    'apple.png', 'orange.jpg', 'forest.bmp', 5, true, {}, []
];

console.log(arr[0]); */

/* alert('Hello'); */

/* const result = confirm("Do you want to me?");
console.log(result); */

/* const answer = prompt("Вам есть 18", "18");
console.log(answer + 5); */

/* const answers = []; */
/* answers[0] = prompt("What is your firstname?", "");
answers[1] = prompt("What is your lastname?", "");
answers[2] = prompt("How do you old?", ""); */

/* console.log(typeof(answers));
console.log(typeof(null)); */

/* const category = 'toys';

console.log(`HTTPS://someurl.com/${category}/5`);

const user = 'Alex';

alert(`Привет, ${category}`); */

//console.log(2 * 4 == '8');



const randomBodyParts = ['ноги', 'волосы', 'пальцы'];
const randomAdjectives = ['жирные', 'слизкие', 'уродливые'];
const randomWords = ['таракана', 'клеща', 'червяка', 'опарыша', 'носорога'];
const randomAnimalsBodyPart = ['жопа', 'член', 'лицо', 'нога', 'хвост', 'уши'];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
let randomAnimalBodyPart = randomAnimalsBodyPart[Math.floor(Math.random() * randomAnimalsBodyPart.length)];

//let randomInsult = `У тебя ${randomBodyPart} словно ${randomAdjective} ${randomWord}!!!`;
let randomInsult = 'У тебя ' + randomBodyPart + ' ещё более ' + randomAdjective + ' чем ' + randomAnimalBodyPart + ' у ' + randomWord + '!!!';
console.log(randomInsult);


// Вторя версия генератора дразнилок

const randomBodyParts = ['ноги', 'волосы', 'пальцы'];
const randomAdjectives = ['жирные', 'слизкие', 'уродливые'];
const randomWords = ['таракана', 'клеща', 'червяка', 'опарыша', 'носорога'];
const randomAnimalsBodyPart = ['жопа', 'член', 'лицо', 'нога', 'хвост', 'уши'];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
let randomAnimalBodyPart = randomAnimalsBodyPart[Math.floor(Math.random() * randomAnimalsBodyPart.length)];

//let randomInsult = `У тебя ${randomBodyPart} словно ${randomAdjective} ${randomWord}!!!`;
let randomInsult = ['У тебя', randomBodyPart, 'ещё более', randomAdjective, 'чем', randomAnimalBodyPart, 'у', randomWord, '!!!'].join(' ');
console.log(randomInsult);

//Задание 4

let arr = [3, 2, 1];
let answer = arr.join(' больше, чем ');
console.log(answer);



const anna = { name: 'Anna', age: 25, luckyNumbers: [2, 4, 8, 16]};
const dave = { name: 'Dave', age: 28, luckyNumbers: [3, 9, 40]};
const kate = { name: 'Kate', age: 17, luckyNumbers: [1, 2, 3]};

const friends = [anna, dave, kate];

console.log(friends[0].luckyNumbers[1]);



const scores = { 'Andry': 0, 'Colin': 0, 'Nick': 0};

scores.Andry += 1;

console.log(scores);


const myCrazyObject =  {
    'name': 'Нелепый объект',
    'some array': [7, 9, { purpose: 'путанница', number: 123 }, 3.3 ],
    'random animal': 'банановая акула',
};

console.log( myCrazyObject['some array'][2]['number'] );

