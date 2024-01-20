 // Destructuring Variable / Assigment

 // Destructuring Array

//  const perkenalan = ['Halo', 'nama', 'saya', 'Sholahuddin Alfatah'];
//  const salam = perkenalan[0];
//  const nama= perkenalan[3];
//  console.log(nama);

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada fuction
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//     nama: 'Sholahuddin Alfatah',
//     umur: 33
// }

// const nama = mhs.nama;
// const {nama, umur} = mhs;
// console.log(nama);

// Assigment tanpa deklarasi object
// ({ nama, umur } = {
//     nama: 'Sholahuddin Alfatah',
//     umur: 33
// });

// console.log(nama);

// Assign ke varibel baru
// const mhs = {
//     nama: 'Sholahuddin Alfatah',
//     umur: 33
// }

// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan Default Value
// const mhs = {
//     nama: 'Sholahuddin Alfatah',
//     umur: 33
// }

// const { nama, umur, email = 'alfatah1505@gmail.com' } = mhs;
// console.log(email);


// Memberi nilai default + assign ke variable baru
// const mhs = {
//     nama: 'Sholahuddin Alfatah',
//     umur: 33,
//     email : 'alfatah1505@gmail.com'

// }

// const { nama: n, umur: u, email: e = 'email@gmail.com' } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//     nama: 'Sholahuddin Alfatah',
//     umur: 33,
//     email : 'alfatah1505@gmail.com'

// }

// const { nama, ...value} = mhs;
// console.log(value);


// Mengambilfield pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Sholahuddin Alfatah',
    umur: 33,
    email : 'alfatah1505@gmail.com'
}

function getIdMhs({ nama }) {
    return nama;
}

console.log(getIdMhs(mhs));

