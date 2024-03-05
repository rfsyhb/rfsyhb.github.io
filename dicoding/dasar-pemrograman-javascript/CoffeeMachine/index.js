console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");

// ! percobaan importing
// const coffeeStockss = require('./state.js');

// ! gunakan destructuring object
// * pastikan ketika destructure nama variable nya sama dengan properti objeknya
// * jika tidak maka akan UNDEFINED
// const {coffeeStock, isCoffeeMachineReady} = require('./state.js');

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// ! import ES6 Module
// import stock from './state.js';

// const displayStock = stock => {
//     for (const type in stock) {
//         console.log(type);
//     }
// }

// displayStock(stock);

// ! import ES6 Module banyak nilai
// * nama harus sama, jika ingin berbeda gunakan 'as'
import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';

console.log(stock);
console.log(isCoffeeMachineReady);