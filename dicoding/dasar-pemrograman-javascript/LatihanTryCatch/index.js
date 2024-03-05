const lat1 = () => {
    try {
        console.log("Awal blok try");   // (1)
        errorCode;                      // (2)
        console.log("Akhir blok try");  // (3)
    } catch (error) {
        console.log(`Terjadi error! ${error}`);  // (4)
        /* 
        ! Beberapa property milik error
        * .name: nama error
        * .message: pesan detail error
        * .stack: informasi urutan kejadian
        */
    } finally {
        console.log("ini finally");
    }
}

const lat2 = () => {
    const json = '{ "name": "Yoda", "age": 20 }';

    try {
        const user = JSON.parse(json);

        console.log(user.name);
        console.log(user.age);
        console.log(user)
        console.log(typeof user)
        console.log(json)
        console.log(typeof json)
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

// ! Tidak sesuai dengan format object akan error dan ditangkap oleh block catch
const lat3 = () => {
    const json = '{ bad json }';

    try {
        const user = JSON.parse(json);

        console.log(user.name);
        console.log(user.age);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }


    /* output
    SyntaxError
    Unexpected token b in JSON at position 2
    */
}

// ! Bagaimana jika variable yang tidak ditemukan?
const lat4 = () => {
    const json = '{ "age": 20 }';

    try {
        const user = JSON.parse(json);

        // ! name tidak ada
        console.log(user.name); // undefined
        console.log(user.age);  // 20
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

// ! Agar program menangkap error
const lat5 = () => {
    const json = '{ "age": 20 }';

    try {
        const user = JSON.parse(json);

        // ! Membuat pesan error agar di-catch error
        if (!user.name) {
            throw new SyntaxError("'name' is required.");
        }

        console.log(user.name); // undefined
        console.log(user.age);  // 20
    } catch (error) {
        console.log(`JSON Error: ${error.message}`);
    }

    /* output
    JSON Error: 'name' is required.
    */
}

// ! Bagaimana ada error lain seperti variable tidak didefinisikan?
const lat6 = () => {
    const json = '{ "name": "Yoda", "age": 20 }';

    try {
        const user = JSON.parse(json);

        if (!user.name) {
            throw new SyntaxError("'name' is required.");
        }

        // ! mencoba memberi variable tidak dideklarasi
        errorCode;

        console.log(user.name); // Yoda
        console.log(user.age);  // 20
    } catch (error) {
        // Cek jika error yang terjadi adalah instance dari SyntaxError
        if (error instanceof SyntaxError) {
            // Jika ya, maka log pesan error khusus untuk SyntaxError
            console.log(`JSON Error: ${error.message}`);
        }
        // Cek jika error yang terjadi adalah instance dari ReferenceError
        else if (error instanceof ReferenceError) {
            // Jika ya, maka log hanya pesan error untuk ReferenceError
            console.log(error.message);
        }
        // Jika error yang terjadi bukan SyntaxError atau ReferenceError
        else {
            // Log stack trace dari error tersebut untuk mendapatkan detail lebih lanjut dari error
            console.log(error.stack);
        }
    }

}

// ! Custom Error
// * Membuat class error baru dengan inheritance dan overriding constructor
const lat7 = () => {
    // membuat class
    class ValidationError extends Error {
        // override constructor
        constructor(message) {
            super(message);
            this.name = "ValidationError";
        }
    }

    const json = '{ "age": 30 }';

    try {
        const user = JSON.parse(json);

        if (!user.name) {
            throw new ValidationError("'name' is required.");
        }
        if (!user.age) {
            throw new ValidationError("'age' is required.");
        }

        console.log(user.name);
        console.log(user.age);
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log(`JSON Syntax Error: ${error.message}`);
        }

        // ! Class baru yang telah dibuat
        else if (error instanceof ValidationError) {
            console.log(`Invalid data: ${error.message}`);
        } else if (error instanceof ReferenceError) {
            console.log(error.message);
        } else {
            console.log(error.stack);
        }
    }

    /* output
    Invalid data: 'name' is required.
    */
}

const quiz10 = () => {
    /**
     * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
     * mendeteksi jenis segitiga berdasarkan nilai argumen.
     * Contoh:
     *  - 1, 1, 1 -> Segitiga sama sisi
     *  - 4, 4, 2 -> Segitiga sama kaki
     *  - 3, 4, 6 -> Segitiga sembarang
     *
     * Namun fungsi detectTriangle belum berjalan dengan baik karena
     * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
     * Contoh:
     *  - 1, false, 1 -> Segitiga sembarang
     *  - 'a', 3, 5 -> Segitiga sembarang
     *  - 12, 2, null -> Segitiga sembarang
     * Kondisi yang diharapkan:
     *  - 1, false, 1 -> Argumen kedua harus number
     *  - 'a', 3, 5 -> Argumen pertama harus number
     *  - 12, 2, null -> Argumen ketiga harus number
     *
     *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
     *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
     *
     * TODO 1:
     * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
     *   - Turunan dari class Error
     *   - Memiliki constructor(message)
     *   - this.name harus bernilai "ValidationError"
     *
     * TODO 2:
     * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
     *   - Menerima 3 argumen
     *   - Bila argumen pertama bukan number:
     *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
     *   - Bila argumen kedua bukan number:
     *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
     *   - Bila argumen ketiga bukan number:
     *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
     *
     * TODO 3:
     * - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
     *   - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
     *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
     */

    // TODO 1
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = 'ValidationError';
        }
    }

    // TODO 2
    const validateNumberInput = (input1, input2, input3) => {
        // ! gunakan typeof karena tipe data primitif
        if (typeof input1 !== 'number') {
            throw new ValidationError('Argumen pertama harus number');
        } else if (typeof input2 !== 'number') {
            throw new ValidationError('Argumen kedua harus number');
        } else if (typeof input3 !== 'number') {
            throw new ValidationError('Argumen ketiga harus number');
        }
    }

    const detectTriangle = (a, b, c) => {
        // TODO 3
        try {
            validateNumberInput(a, b, c);

            if (a === b && b === c) {
                return 'Segitiga sama sisi';
            }

            if (a === b || a === c || b === c) {
                return 'Segitiga sama kaki';
            }

            return 'Segitiga sembarang';
        } catch (error) {
            return `Invalid data: ${error.message}`;
        }
    };

    // ! Pengujian
    console.log(detectTriangle(1, 1, 1));
    console.log(detectTriangle(4, 4, 2));
    console.log(detectTriangle(3, 4, 6));
    console.log(detectTriangle(1, false, 1));
    console.log(detectTriangle('a', 3, 5));
    console.log(detectTriangle(12, 2, null));
}

const lat8 = () => {
    class MyCustomError extends Error {
        constructor(message) {
            super(message);
            this.name = "MyError";
        }
    }

    try {
        throw new MyCustomError("This is an error");
    } catch (e) {
        console.log(e.message);
    }
}

const lat9 = () => {
    try {
        const arr = [1, 2, 3, 4];
        for (let i = 0; i <= 4; i++) {
            console.log(arr[i]);
        }
    } catch (e) {
        console.log("Out of bounds");
    }
}

// const lat10
// const lat11
// const lat12
lat9();