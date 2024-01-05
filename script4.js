// 2.1 EXECUTION CONTEXT, HOSTING & SCOPE

// console.log(nama);
// var nama = 'Sholahuddin';

// creation phase pada Global Context
// nama var = undefined
// nama fuction = fn()
// hoisting 
// window = global object
// this = window

// execution phase 

// https://pythontutor.com/javascript.html#mode=edit

var nama = 'Sholahuddin';
var umur = 33;

console.log(sayHello());

function sayHello() {
    return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
}


