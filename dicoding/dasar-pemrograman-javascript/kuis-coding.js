{
    // ! quiz 1: Console log pertama
    // @TODO: Cetak teks "Saya mulai belajar JavaScript!" ke console
    console.log('Saya mulai belajar JavaScript!')
}

{
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
}

{
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
}
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

{
    const firstString = "Hello";
    const secondString = "JavaScript";

    console.log(firstString + secondString);
}

{
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
}
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

{
    // ! quiz 5: array
    /**
     * TODO:
     * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
     *   - Array tersebut menampung bilangan genap dari 1 hingga 100
     *
     * Catatan:
     *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
     */

    // Tulis kode di bawah ini
    const evenNumber = [];

    // melakukan for loop
    for (i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            evenNumber.push(i);
        }
    }

    // pengujian
    console.log(evenNumber)
}

{
    // ! quiz 6: map
    /**
     * TODO:
     * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
     *   - key "USD", value 14000
     *   - key "JPY", value 131
     *   - key "SGD", value 11000
     *   - key "MYR", value 3500
     * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
     *     - priceInJPY dengan nilai currency JPY
     */

    const priceInJPY = 5000;

    // Tulis kode di bawah ini
    // membuat map
    const currency = new Map([
        ['USD', 14000],
        ['JPY', 131],
        ['SGD', 11000],
        ['MYR', 3500]
    ]);

    // buat variable priceInIDR dan menghitungnya
    let priceInIDR = priceInJPY * currency.get('JPY');

    // menampilkan nilai variabel priceInIDR
    console.log(priceInIDR)
}

{
    const artistsAndSongs = {
        "Keyakizaka46": ["Silent Majority"],
        "Blackpink": ["How You Like That", "Ice Cream"],
        "JKT48": ["Rapsodi", "Heavy Rotation"],
        "Twice": ["What is Love?"],
    }

    artistsAndSongs["Babymetal"] = ["Gimme chocolate", "yo"];

    delete artistsAndSongs["Keyakizaka46"];
    console.log(artistsAndSongs)
}

{
    // ! quiz 7: function
    /**
     * TODO:
     * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
     *    - Menerima dua buah argumen number, a dan b.
     *    - Mengembalikan nilai terkecil antara a atau b.
     *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
     *
     *    contoh:
     *    minimal(1, 4) // output: 1
     *    minimal(3, 2) // output: 2
     *    minimal(3, 3) // output: 3
     *
     * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
     *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
     *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
     *
     *    contoh:
     *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
     *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
     *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
    */

    // Tulis kode di bawah ini

    // 1. Membuat function untuk return nilai terkecil
    // membuat arrow function
    const minimal = (a, b) => {
        if (a <= b) {
            return a;
        } else {
            return b;
        }
    }

    // pengujian minimal
    console.log(minimal(1, 4))
    console.log(minimal(3, 2))
    console.log(minimal(3, 3))

    // 2. Arrow function untuk array dan number
    const findIndex = (array, number) => {
        // for loop
        for (let i = 0; i < array.length; i++) {
            // jika nilainya sesuai
            if (array[i] === number) {
                // return index-nya
                return i;
            }
        }
        // jika tidak ditemukan dari for di atas maka return berikut
        return -1;
    }

    // pengujian findIndex
    console.log(findIndex([1, 2, 3, 4, 5], 3))
    console.log(findIndex([1, 2, 3, 4, 5], 6))
    console.log(findIndex([1, 2, 3, 4, 5], 5))
}

{
    function minMax(arrayOfNumbers) {
        let currentMin = arrayOfNumbers[0];
        let currentMax = arrayOfNumbers[0];
        for (value of arrayOfNumbers) {
            if (value < currentMin) {
                currentMin = value;
            } else if (value > currentMax) {
                currentMax = value;
            }
        }

        console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
    }

    minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);
}

{
    function multiply(num) {
        total = num * num;
    }

    const result = multiply(3);

    console.log(result);
}

{
    const car = {
        brand: 'Ford',
        color: 'red',
        maxSpeed: 200,
        chassisNumber: 'f-1',
        drive: () => {
            console.log('driving');
        },
        reverse: () => {
            console.log('reversing');
        },
        turn: () => {
            console.log('turning');
        }
    }
}

{
    function Car(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
    }

    Car.prototype.drive = function () {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    Car.prototype.reverse = function () {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    Car.prototype.turn = function () {
        console.log(`${this.brand} ${this.color} is turning`);
    }

    // Membuat objek mobil dengan constructor function Car
    const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
    const car2 = new Car('Honda', 'Black', 180, 'ho-1');
    const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

    console.log(car1);
    car1.drive();
}

{
    class Car {
        constructor(brand, color, maxSpeed, chassisNumber) {
            this.brand = brand;
            this.color = color;
            this.maxSpeed = maxSpeed;
            this.chassisNumber = chassisNumber;
        }

        drive() {
            console.log(`${this.brand} ${this.color} is driving`);
        }

        reverse() {
            console.log(`${this.brand} ${this.color} is reversing`);
        }

        turn() {
            console.log(`${this.brand} ${this.color} is turning`);
        }
    }

    // Membuat objek mobil dengan constructor function Car
    const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
    const car2 = new Car('Honda', 'Black', 180, 'ho-1');
    const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

    console.log(car1);
    console.log(car2);
    console.log(car3);

    car1.drive();
}

{
    const date = new Date();

    const timeInJakarta = date.toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
    });

    const timeInTokyo = date.toLocaleString('ja-JP', {
        timeZone: 'Asia/Tokyo',
    });

    const timeInMakassar = date.toLocaleString('id-ID', {
        timeZone: 'Asia/Makassar',
    });

    console.log(timeInJakarta);
    console.log(timeInTokyo);
    console.log(timeInMakassar);

    /**
    * Output:
    * 22/12/2022 10.37.14
    * 2022/12/22 12:37:14
    * 22/12/2022 11.37.14
    */
}

{
    class UniqueArray extends Array {
        constructor(...args) {
            // make sure args is unique before passing it to super
            const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);

            super(...uniqueValue);
        }

        push(item) {
            // make sure only unique item is added
            if (!this.includes(item)) {
                super.push(item);
            }
        }
    }

    const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
    console.log(someArray); // ['a', 'b', 'c']
    someArray.push('d');
    console.log(someArray); // ['a', 'b', 'c', 'd']
    someArray.push('a');
    console.log(someArray); // ['a', 'b', 'c', 'd']
}

{
    // ! quiz 8: Object-oriented programming
    /**
     * TODO:
     * 1. Buatlah class bernama Animal dengan ketentuan:
     *    - Memiliki properti:
     *      - name: string
     *      - age: int
     *      - isMammal: boolean
     *    - Memiliki constructor untuk menginisialisasi properti:
     *      - name
     *      - age
     *      - isMammal
     * 2. Buatlah class bernama Rabbit dengan ketentuan:
     *    - Merupakan turunan dari class Animal
     *    - Memiliki method:
     *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
     *    - Ketika diinstansiasi, properti isMammal harus bernilai true
     * 3. Buatlah class bernama Eagle dengan ketentuan:
     *    - Merupakan turunan dari class Animal
     *    - Memiliki method:
     *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
     *    - Ketika diinstansiasi, properti isMammal harus bernilai false
     * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
     *    - properti name bernilai: "Labi"
     *    - properti age bernilai: 2
     * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
     *    - properti name bernilai: "Elo"
     *    - properti age bernilai: 4
     */

    // Tulis kode di bawah ini
    class Animal {
        constructor(name = '', age = 0, isMammal = false) {
            this.name = name;
            this.age = age;
            this.isMammal = isMammal;
        }
    }

    // membuat class rabbit
    class Rabbit extends Animal {
        constructor(name = '', age = 0) {
            let isMammal = true;
            super(name, age, isMammal)
        }

        eat() {
            return `${this.name} sedang makan!`;
        }
    }

    // membuat class eagle
    class Eagle extends Animal {
        constructor(name = '', age = 0) {
            let isMammal = false;
            super(name, age, isMammal)
        }

        fly() {
            return `${this.name} sedang terbang!`;
        }
    }

    // membuat instance kedua hewan
    const myRabbit = new Rabbit('Labi', 2);
    const myEagle = new Eagle('Elo', 4);

    // menguji nilai
    console.log(myRabbit)
    console.log(myEagle)
}

{
    function car({ brand, maxSpeed, wheelCount }) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.wheelCount = wheelCount;
    }

    const myCar = new car({ brand: 'Toyota', maxSpeed: 200, wheelCount: 4 });

    console.log(myCar)
}

{
    // ! quiz 9: Functional Programming
    /**
     * TODO:
     * Buatlah variabel greatAuthors yang merupakan array
     * berdasarkan hasil filter() dan map() dari books:
     *   - Gunakan fungsi filter untuk mengembalikan nilai item books
     *     yang hanya memiliki nilai sales lebih dari 1000000.
     *   - Gunakan fungsi map pada books yang sudah ter-filter,
     *     untuk mengembalikan nilai string dengan format:
     *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
     *
     * Catatan: Jangan ubah nilai atau struktur dari books
     */

    const books = [
        { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
        { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
        { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
        { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
        { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
        { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
        { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
    ];

    // Tulis kode di bawah ini
    // membuat variable greatAuthors dan melakukan filter untuk sales di atas 1000000
    const greatAuthors = books.filter((book) => book.sales > 1000000)
        // melakukan map untuk callback
        .map((book) => `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`);

    // menguji hasilnya
    console.log(greatAuthors)
}

{
    if ((true || false) && (false || false)) {
        console.log("It's true");
    } else {
        console.log("It's false");
    }
}

{
    let myVariable = 12;
    myVariable = 30;
    myVariable = 5;

    console.log(myVariable);
}

{
    const name = 'Dicoding';
    const language = 'JavaScript';

    console.log(`Hello $name. Welcome to $language!`);
}

{
    const artistsAndSongs = {
        "Keyakizaka46": ["Silent Majority"],
        "Blackpink": ["How You Like That", "Ice Cream"],
        "JKT48": ["Rapsodi", "Heavy Rotation"],
        "Twice": ["What is Love?"],
    }

    artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
    delete artistsAndSongs["Keyakizaka46"];
    artistsAndSongs["Blackpink"].push("Rose - Gone");

    console.log(artistsAndSongs);
}

{
    const capital = {
        "Jakarta": "Indonesia",
        "London": "England",
        "Tokyo": "Japan"
    }
    capital["New Delhi"] = "Indonesia";

    console.log(capital["Indonesia"]);
}

{
    function multiply(num) {
        total = num * num;
    }

    const result = multiply(3);

    console.log(result);
}

{
    function car({ brand, maxSpeed, wheelCount }) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.wheelCount = wheelCount;
    }

    // const myCar = new car({ brand: 'Toyota', maxSpeed: 200, wheelCount: 4 });
    const myCar = car({ brand: 'Toyota', maxSpeed: 200, wheelCount: 4 });
    console.log(myCar)
}

{
    class Car { }
    const car = new Car();
    console.log(typeof Car);
}

{
    const adder = (first) => (second) => first + second;

    const addByOne = adder(1);
    const addByTwo = adder(2);

    console.log(addByOne(4));
    console.log(addByTwo(3));
}

{
    try {
        const arr = [1, 2, 3, 4];
        for (let i = 0; i <= 4; i++) {
            console.log(arr[i]);
        }
    } catch(e) {
        console.log("Out of bounds");
    }
}