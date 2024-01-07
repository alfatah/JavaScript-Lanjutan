// Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Sholahuddin'));

// const tampilNama = (nama) => { return `Halo, ${nama}`; }
// console.log('Sholahuddin Alfatah');

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Erik', 'Malam'));

// implisit return
// const tampilNama = nama => `Halo, ${nama}`; 
// console.log('Sholahuddin Alfatah');

// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

let mahasiwa = ['Sholahuddin Alfatah', 'Rahmad Abudullah', 'Alfa'];

// let jumlahHuruf = mahasiwa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiwa.map( nama => nama.length );
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiwa.map( nama => ({ nama: nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf);

