// Tagged Templates
// const nama = 'Sholahuddin Alfatah';
// const umur = 33;

// function coba(strings, ...values) {
//     // return values;
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Sholahuddin Alfatah';
const umur = 33;
const email = 'alfatah1505@gmail.com'

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="h1">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}`;
console.log(str);

document.body.innerHTML = str;
