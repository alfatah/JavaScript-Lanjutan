// Destructuring

// function kalkulasi(a,b) {
//     return [a + b, a- b, a * b, a / b];
// }

// const jumlah = perjumlahanPerkalian(2, 3)[0];
// const kali = perjumlahanPerkalian(2, 3)[1];
// console.log(kali);

// const [jumlah, kali] = perjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(tambah);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b, 
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }


// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
// console.log(kurang);


// Destructuring function arguments
const mhs1 = {
    nama: 'Sholahuddin Alfatah',
    umur: 33,
    email: 'alfatah1505@gmail.com',
    nilai: {
        tugas: 80,
        uts: 84,
        uas: 75
    }
}

// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${mhs1.nama}, saya berumur ${mhs1.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));