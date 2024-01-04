// Cara untuk membuat Object pada javascript

// 1. Object Literal
// PROBLEM : tidak efektif untuk obaject yang banyak
// let mahasiswa1 = {
//     nama: 'Sholahuddin',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, Selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Doddy',
//     energi: 20,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, Selamat makan!`);
//     }
// }

// 2. Function Declaration

// const methodMahasiswa = {

//    makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat Tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// let sholahuddin = Mahasiswa('Sholahuddin', 10);
// let doddy = Mahasiswa('Doody', 20);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//    this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }

//    this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain!`)
//     }
// }

// let sholahuddin = new Mahasiswa('Sholahuddin', 10);
// let doddy = new Mahasiswa('Doddy', 20);

// 4. Object.create







function Mahasiswa(nama, energi) {
    // let mahasiswa = Object.create(methodMahasiswa);
    // let mahasiswa = {};
    let this = Object.create(Mahasiswa.prototype);
    this.nama = nama;
    this.energi = energi;

    // return mahasiswa;
    return this;
}