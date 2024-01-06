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

// var nama = 'Sholahuddin';
// var umur = 33;

// console.log(sayHello());

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting 


// var nama = 'Sholahuddin Alfatah';
// var username = 'alfatah.id';

// function cetakURL(username) {
//     // console.log(arguments[0]);
//     var instagramURL = 'https://www.instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('alfatah.id'));


// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');
        
//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();



function satu() {
    var nama = 'Sholahuddin';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);