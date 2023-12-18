// Cara untuk membuat Object pada javascript
// 1. Object Literal
let mahasiswa = {
    nama: 'Sholahuddin',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Hallo ${this.nama}, Selamat makan!`);
    }
}


// 2. Function Declaration
// 3. Constructor Function
// 4. Object.create