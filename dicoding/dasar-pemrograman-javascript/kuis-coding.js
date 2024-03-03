// ! quiz 1: Console log pertama
// @TODO: Cetak teks "Saya mulai belajar JavaScript!" ke console
console.log('Saya mulai belajar JavaScript!')

// ! quiz 2: Variabel dan Tipe Data
/**
 * TODO:
 * Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
 *  - firstName: bertipe data string, dengan nilai "John".
 *  - lastName: bertipe data string, dengan nilai "Doe".
 *  - age: bertipe data number, dengan nilai 25.
 *  - isMarried: bertipe data boolean, dengan nilai true.
 */

// Tulis kode di bawah ini
// Deklarasi variabel dan nilai
let firstName = 'John';
let lastName = 'Doe';
let age = 25;
let isMarried = true;

// Pengujian nilai
console.log(`firstName nilainya ${firstName} dan tipe datanya ${typeof (firstName)}`)
console.log(`lastName nilainya ${lastName} dan tipe datanya ${typeof (lastName)}`)
console.log(`age nilainya ${age} dan tipe datanya ${typeof (age)}`)
console.log(`isMarried nilainya ${isMarried} dan tipe datanya ${typeof (isMarried)}`)

// ! quiz 3: Logika Operator dan If Else
/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika score bernilai 90 atau lebih
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika score bernilai 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika score bernilai 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika score bernilai 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika score bernilai di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */

function scoreChecker(score) {
    let result;

    // TODO
    if (score >= 90) {
        result = `Selamat! Anda mendapatkan nilai A.`;
    } else if (score >= 80) {
        result = `Anda mendapatkan nilai B.`;
    } else if (score >= 70) {
        result = `Anda mendapatkan nilai C.`;
    } else if (score >= 60) {
        result = `Anda mendapatkan nilai D.`;
    } else if (score < 60) {
        result = `Anda mendapatkan nilai E.`;
    }

    // Jangan hapus kode ini
    return result;
}

/**
 * Jangan hapus kode di bawah ini
 */
module.exports = scoreChecker;

// menguji nilai jika 20
console.log(scoreChecker(20));

// menguji nilai jika 60
console.log(scoreChecker(60));

if ((true || false) && (false || false)) {
    console.log("It's true");
} else {
    console.log("It's false");
}

for (let i = 1; i < 9; i += 2) {
    console.log(i);
}

for (let i = 1; i < 10; i += 2) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

const firstString = "Hello";
const secondString = "JavaScript";

console.log(firstString + secondString);

// * Object dan assignment operator untuk properti
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";
// ! ini akan error
// spaceship = { name: "New Millenium Falcon" }; 
console.log(spaceship);

{
    // ! quiz 4: object
    /**
     * TODO
     * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
     *    - Memiliki properti bernama "name"
     *       - Bertipe data string
     *       - Bernilai "Bakso Mang Dicoding".
     *    - Memiliki properti bernama "city"
     *       - Bertipe data string
     *       - Bernilai "Bandung".
     *    - Memiliki properti "favorite drink"
     *       - Bertipe data string
     *       - Bernilai "Es Teh".
     *    - Memiliki properti "favorite food"
     *       - Bertipe data string
     *       - Bernilai "Bakso".
     *    - Memiliki properti "isVegan"
     *       - Bertipe data boolean
     *       - Bernilai false.
     *
     * 2. Buatlah variabel bernama name.
     *    Kemudian isi dengan nilai name dari properti object restaurant
     * 3. Buatlah variabel bernama favoriteDrink.
     *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
     */

    // Tulis kode di bawah ini
    const restaurant = {
        name: "Bakso Mang Dicoding",
        city: "Bandung",
        "favorite drink": "Es Teh",
        "favorite food": "Bakso",
        isVegan: false,
    }

    // mencoba menggunakan deconstruct dan assign ke local variable name
    let { name, "favorite drink": favoriteDrink } = restaurant;

    // menguji
    console.log(`Variabel name bernilai ${name} dan variabel favoriteDrink bernilai ${favoriteDrink}`)
}