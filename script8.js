// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiwa = function() {
//     this.nama = 'Sholahuddin';
//     this.umur = 33;
//     console.log(this);
//     this.sayHello = function() {
//         console.log(`Halo, nama saya $(nama), dan saya $(umur) tahun.`);
//     }
// } 

// const sholahuddin = new Mahasiwa();

// Arrow Function
// const Mahasiwa = function () {
//     this.nama = 'Sholahuddin';
//     this.umur = 33;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// } 

// const sholahuddin = new Mahasiwa();


// Object Literal
// const mhs1 = {
//     nama: 'Sholahuddin',
//     umur: '33',
//     sayHello: () => {
        // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//         console.log(this);
//     }
// }

// const Mahasiwa = function() {
//     this.nama = 'Sholahuddin';
//     this.umur = 33;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya $(nama), dan saya $(umur) tahun.`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);

// } 

// const sholahuddin = new Mahasiwa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';
    // let that = this;

    if (this.classList.contains(satu)) {
        // satu = temp;
        // satu = dua;
        // dua = temp;
        [satu, dua] = [dua, satu];
    }

   this.classList.toggle(satu);
   setTimeout(() => {
    this.classList.toggle(dua);
    // console.log(that);
   }, 600);
});