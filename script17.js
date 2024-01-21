// for..of
// const mhs = ['Sholahuddin', 'Alfatah', 'Erik'];

// for( let i = 0; i <  mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for( const m of mhs ) {
//     console.log(m);
// }

// String
// const nama = 'Sholahuddin';
// for( const n of nama ) {
//     console.log(n);
// } 


// const mhs = ['Sholahuddin', 'Alfatah', 'Erik'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for(const [i,m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }


// NodeList
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);
// liNama.forEach(n => console.log(n.textContent));
// for(n of liNama) {
//     console.log(n.innerHTML);
// }


// arguments
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// function jumlahkanAngka() {
    // console.log(arguments);
    // return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
    // (local var) arguments: IArguments
    // [1, 2, 3].forEach(a => jumlah += a);
//     let jumlah = 0;
//     for( a of arguments ) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const mhs = {
    nama: 'Sholahuddin',
    umur: 33,
    email: 'alfatah1505@gmil.com'
}

for( m in mhs ) {
    console.log(mhs[m]);
}

