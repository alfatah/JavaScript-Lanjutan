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
const lagu = {
    judul: 'Tetap Dalam Jiwa',
    penyanyi: 'Isyana Sarasvati'
}

const el = `<div class="lagu"> 
    <ul> 
    <li>${lagu.penyanyi}</li>
    <li>${lagu.judul}</li>
    </ul>
</div>`;

document.body.innerHTML = el;