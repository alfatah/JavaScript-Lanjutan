// 1. HTML Fragments
// const mhs = {
//     nama: 'Sholahuddin Alfatah',
//     umur: 33,
//     nrp: '0000007',
//     email: 'alfatah1505@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;


// 2. Looping
// const mhs = [
//     {
//         nama: 'Sholahuddin Alfatah',
//         email: 'alfatah1505@gmail.com'
//     },
//     {
//         nama: 'Dody Alfatah',
//         email: 'dody@gmail.com'
//     },
//     {
//         nama: 'Erik Wahyu Ramadhan',
//         email: 'erik@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//   ${mhs.map(m => `<ul>
//   <li>${m.nama}</li>
//   <li>${m.email}</li>
//   </ul>`).join('')}
// </div>`;

// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Kau adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu"> 
//     <ul> 
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} feat. ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;


// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama: 'Sholahuddin Alfatah',
    semester: 5,
    mataKuliah: [
    'Rakayasa Web', 
    'Analisis dan Perancangan Sistem Informasi',
    'Pemprograman Sistem Interaktif',
    'Perancangan Sistem Berorientasi Object'
]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs"> 
    <ul> 
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;