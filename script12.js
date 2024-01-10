// Template Literals / Template String
// const nama = 'Sholahuddin';
// const umur = 33;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log('Halo, nama saya ' + nama + ', dan saya ' + umur + ' tahun.');

// Embedded Exopressions
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : ' ganjil'}`);

// HTML Fragments
const mhs = {
    nama: 'Sholahuddin Alfatah',
    umur: 33,
    nrp: '0000007',
    email: 'alfatah1505@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);