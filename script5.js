// function init() {
//     let nama = 'Sholahuddin';
//     let umur = 33;
//     function tampilNama() {
//         console.log(nama);
//         console.log(umur);
//     }
//     console.dir(tampilNama);
// }
// init();

// function init() {
//         // let nama = 'Sholahuddin';
//         return function tampilNama(nama) {
//             console.log(nama);
//         }
    
//     }
//     let panggilNama = init();
//     panggilNama('Sholahuddin');
//     panggilNama('Galih');


// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, 
//         semoga harimu menyenangkan!`);
//     }
// }

// let SelamatPagi = ucapkanSalam('Pagi');
// let SelamatSiang = ucapkanSalam('Siang');
// let SelamatMalam = ucapkanSalam('Malam');

// // SelamatPagi('Sholahuddin');
// // SelamatMalam('Galih');

// console.dir(SelamatMalam('Sholahuddin'));



let add = (function() {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

// let a = add();
counter = 100;

// counter = 100;
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());



