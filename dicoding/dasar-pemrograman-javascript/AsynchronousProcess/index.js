const coba1 = () => {
    console.log('Selamat datang!');

    setTimeout(() => {
        console.log('Terima kasih sudah mampir, silakan datang kembali!');
    }, 3000)

    console.log('Ada yang bisa dibantu?');
}

const coba2 = () => {
    function getUsers(callback) {
        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            callback(users);
        }, 3000);
    }

    function usersCallback(a) {
        console.log(a);
    }

    getUsers(usersCallback);
}

// ! eksperimen sebelum liat materi
const coba3 = () => {
    function getUsers(isOffline, callback) {
        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if (isOffline) {
                callback(new Error('cannot retrieve users due offline'), null);
                return;
            }

            callback(null, users);
        }, 3000);
    }

    function usersCallback(error, data) {
        if (error) {
            console.error("Error:", error.message);
        } else {
            console.log("Data:", data);
        }
    }

    getUsers(true, usersCallback);
}

// ! dari materi
const coba4 = () => {
    function getUsers(isOffline, callback) {
        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if (isOffline) {
                callback(new Error('cannot retrieve users due offline'), null);
                return;
            }

            callback(null, users);
        }, 3000);
    }

    function usersCallback(error, users) {
        if (error) {
            console.log('process failed:', error.message);
            return;
        }
        console.log('process success:', users);
    }

    getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
    getUsers(true, usersCallback); // process failed: cannot retrieve users due offline
}

// ! percobaan promise-based
const coba5 = () => {
    function getUsers(isOffline) {
        // return a promise object
        return new Promise((resolve, reject) => {

            // simulate network delay
            setTimeout(() => {
                const users = ['John', 'Jack', 'Abigail'];

                if (isOffline) {
                    reject(new Error('cannot retrieve users due offline'));
                    return;
                }

                resolve(users);
            }, 3000);
        });
    }

    getUsers(true)
        .then(users => console.log(users))
        .catch(err => console.log(err.message));
}

// ! Percobaam promisify
const coba6 = () => {
    const { promisify } = require('util');

    function getUsers(isOffline, callback) {
        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];
            if (isOffline) {
                callback(new Error('cannot retrieve users due offline'), null);
                return;
            }

            callback(null, users);
        }, 3000);
    }

    // create a Promise version of getUsers
    const getUsersPromise = promisify(getUsers);

    getUsersPromise(false)
        .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
        .catch(err => console.log(err.message));

    getUsersPromise(true)
        .then(users => console.log(users))
        .catch(err => console.log(err.message)); // cannot retrieve users due offline
}

// ! Quiz 11 Mengubah Fungsi Asynchronous Callback-Based Menjadi Promise-Based
const quiz11 = () => {
    /**
     * @TODO
     * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
     *
     * Catatan:
     * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
     * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
     */
    const { promisify } = require('util');

    function getProvincesCallback(countryId, callback) {
        setTimeout(() => {
            if (countryId === 'id') {
                callback(null, [
                    { id: 'id-jk', name: 'Jakarta' },
                    { id: 'id-bt', name: 'Banten' },
                    { id: 'id-jr', name: 'Jawa Barat' },
                ]);
                return;
            }

            callback(new Error('Country not found'), null);
        }, 1000);
    }

    // merubah menjadi promise-based
    const getProvinces = promisify(getProvincesCallback);

    module.exports = { getProvinces: getProvinces };
}

// ! Chaining Promise
const coba7 = () => {
    function withDrawMoney(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 100) {
                    reject(new Error('Not enough money to withdraw'));
                }

                resolve(amount);
            }, 1000);
        });
    }

    function buyCinemaTicket(money) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (money < 10) {
                    reject(new Error('not enough money to buy ticket'));
                }

                resolve('ticket-1');
            }, 1000);
        });
    }

    function goInsideCinema(ticket) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!ticket) {
                    reject(new Error('no ticket'));
                }

                resolve('enjoy the movie');
            }, 1000);
        });
    }

    function watchMovie() {
        // * pertama akan melakukan withdraw
        withDrawMoney(10)
            .then((money) => {
                // * jika resolve maka pergi buyCinemaTicket
                return buyCinemaTicket(money);
            })
            .then((ticket) => {
                // * selanjutnya setelah mendapatkan ticket masuk ke cinema
                return goInsideCinema(ticket);
            })
            .then((result) => {
                // * cetak result
                console.log(result);
            })
            // ! menangkap error dari seluruh promise
            .catch((error) => {
                console.log(error.message);
            });
    }

    watchMovie();
}

// ! Promise.all
const coba8 = () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
    // const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
    const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

    Promise.all([promise1, promise2, promise3])
        .then((values) => console.log(values))
        .catch((error) => console.log(error.message));
}

// ! Promise.race
const coba9 = () => {
    // const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1500));
    const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1300));
    const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

    Promise.race([promise1, promise2, promise3])
        .then((value) => console.log(value))
        .catch((error) => console.log(error.message));
}

// ! Promise.allSettled
const coba10 = () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
    const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
    const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

    Promise.allSettled([promise1, promise2, promise3])
        .then((results) => console.log(results));
}

// ! Promise.any
const coba11 = () => {
    // fulfilled sample
    const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
    const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
    const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

    Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
        .then((value) => console.log(value)) // 1
        .catch((error) => console.log(error.message));

    // rejected sample
    const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
    const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
    const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

    Promise.any([promiseReject1, promiseReject2, promiseReject3])
        .then((value) => console.log(value))
        .catch((error) => console.log(error.message)); // All Promises were rejected
}

// ! Penggunaan Async Await pada Promise
const coba12 = () => {
    function withDrawMoney(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 100) {
                    reject(new Error('Not enough money to withdraw'))
                }

                resolve(amount)
            }, 1000);
        });
    }

    function buyCinemaTicket(money) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (money < 10) {
                    reject(new Error('not enough money to buy ticket'))
                }

                resolve('ticket-1')
            }, 1000);
        });
    }

    function goInsideCinema(ticket) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!ticket) {
                    reject(new Error('no ticket'))
                }

                resolve('enjoy the movie')
            }, 1000);
        });
    }

    // * syntax async await dengan mengembalikan Promise
    async function watchMovie(amount) {
        try {
            const money = await withDrawMoney(amount);
            const ticket = await buyCinemaTicket(money);
            const result = await goInsideCinema(ticket);

            return result;
        } catch (error) {
            throw error;
        }
    }

    watchMovie(10)
        .then((result) => console.log(result)) // enjoy the movie
        .catch((error) => console.log(error.message));

    watchMovie(5)
        .then((result) => console.log(result))
        .catch((error) => console.log(error.message)); // not enough money to buy ticket
}

const quiz12 = () => {
    /**
     * @TODO
     * Lengkapilah kode di bawah ini agar dapat mengakses jalan tol.
     * 1. Beli kartu tol (buyTollRoadCard) -> isi argumen money dengan angka 25 -> mengembalikan objek { tollRoadCard: true, balance: 0 }.
     * 2. Isi saldo kartu tol (topUpBalance) -> isi argumen card dengan objek card yang didapat dari langkah 1 dan isi argumen amount dengan angka 10 -> mengembalikan objek { tollRoadCard: true, balance: 10 }.
     * 3. Gunakan akses jalan toll (useTollRoad) -> isi argumen card dengan objek card yang didapat dari langkah 2.
     *
     * Catatan:
     * - Anda boleh menggunakan async/await atau .then() atau .catch() atau kombinasi keduanya.
     * - Jika ada error, tampilkan error (error.message) tersebut dengan console.log.
     * - Masing-masing langkah di atas harus dijalankan secara berurutan.
     * - Masing-masing langkah akan mencetak pesan ke console.
     * - Anda bisa mengeksplorasi fungsi yang sudah disediakan di utils.js. Namun, Anda tidak boleh mengubah isi dari utils.js.
     */

    function buyTollRoadCard(money) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (money >= 25) {
                    console.log('buying card');
                    resolve({ tollRoadCard: true, balance: 0 });
                    return;
                }

                reject(new Error('not enough money to buy card'));
            }, 1000);
        });
    }

    function topUpBalance(card, amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (card) {
                    console.log('topping up balance');
                    resolve({ ...card, balance: card.balance + amount });
                    return;
                }

                reject(new Error('no card'));
            }, 1000);
        });
    }


    function useTollRoad(card) {
        const TOLL_PRICE = 10;

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (card.balance < TOLL_PRICE) {
                    reject(new Error('not enough balance'));
                    return;
                }

                card.balance -= TOLL_PRICE;

                console.log('using toll road');
                resolve();
            }, 1000);
        });
    }

    // ! Main
    function getTollAccess(amount) {
        buyTollRoadCard(amount)
            .then((card) => topUpBalance(card, 10))
            .then((card) => useTollRoad(card))
            .catch((error) => console.log(error.message))
    }

    // * t beda
    // function getTollAccess() {
    //     buyTollRoadCard(25)
    //         .then((money) => {
    //             return topUpBalance(money, 10);
    //         })
    //         .then((ticket) => {
    //             return useTollRoad(ticket);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         });
    // }

    // function getTollAccess(amount) {
    //     buyTollRoadCard(amount)
    //         .then(card => {
    //             console.log('Card purchased successfully.');
    //             return topUpBalance(card, 10); // Lanjut ke langkah berikutnya dengan card yang telah dibeli
    //         })
    //         .then(card => {
    //             console.log('Balance topped up successfully.');
    //             return useTollRoad(card); // Gunakan card yang telah di-top up untuk akses jalan tol
    //         })
    //         .then(() => {
    //             console.log('Toll road accessed successfully.');
    //         })
    //         .catch(error => {
    //             // Tangani kesalahan dari setiap langkah di atas
    //             console.log(error.message);
    //         });
    // }

    // async function getTollAccess() {
    //     try {
    //         // Langkah 1: Beli kartu tol
    //         const card = await buyTollRoadCard(25);
    //         console.log('Card purchased:', card);

    //         // Langkah 2: Isi saldo kartu tol
    //         const toppedUpCard = await topUpBalance(card, 10);
    //         console.log('Balance topped up:', toppedUpCard);

    //         // Langkah 3: Gunakan jalan tol
    //         await useTollRoad(toppedUpCard);
    //         console.log('Successfully used the toll road with card:', toppedUpCard);
    //     } catch (error) {
    //         // Menangkap dan menampilkan error jika ada
    //         console.log(error.message);
    //     }
    // }

    async function getTollAccess() {
        try {
            // Langkah 1: Beli kartu tol
            const card = await buyTollRoadCard(25);

            // Langkah 2: Isi saldo kartu tol
            const toppedUpCard = await topUpBalance(card, 10);

            // Langkah 3: Gunakan jalan tol
            await useTollRoad(toppedUpCard);
        } catch (error) {
            // Menangkap dan menampilkan error jika ada
            console.log(error.message);
        }
    }

    // Jangan hapus kode di bawah ini
    getTollAccess();
}


// ! Modul Node Package Manager
import _ from 'lodash';

const tanpaLodashSum = () => {
    const myArray = [1, 2, 3, 4];
    let sum = 0;

    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }

    console.log(sum);
}

const tanpaLodashReduce = () => {
    const myArray = [1, 2, 3, 4];
    let sum = myArray.reduce((prev, curr) => {
        return prev + curr;
    });

    console.log(sum);
}

const denganLodash = () => {
    const myArray = [1, 2, 3, 4];
    const sum = _.sum(myArray);

    console.log(sum);
}

tanpaLodashSum();
tanpaLodashReduce();
denganLodash();