// Callback
// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));


// const mhs = [
//     {
//         "nama": "Sandhika Galih",
//         "nrp": "043040023",
//         "email": "sandhikagalih@unpas.ac.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Sholahuddin Alfatah",
//         "nrp": "0000007",
//         "email": "alfatah1505@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Rahmad",
//         "nrp": "0000008",
//         "email": "rahmad5@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Lele",
//         "nrp": "0000009",
//         "email": "lele@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
// ];
// console.log('mulai');
// mhs.forEach(m => {
//    for( let i = 0; i < 1000000; i++ ) {
//     let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if( xhr.readyState === 4 ) {
//             if(xhr.status === 200 ) {
//                 success(xhr.response);
//             } else if(  xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }


// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results); 
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
// });
// console.log('selesai');

// JQuery
console.log('mulai');
$.ajax({
    URL: '/data/data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));

    },
    error: (e) => {
        console.log(e.responText);

    }
});
console.log('selesai');