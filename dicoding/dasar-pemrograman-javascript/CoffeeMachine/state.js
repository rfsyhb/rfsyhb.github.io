const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMachineReady = true;

// ! untuk satu nilai
// module.exports = coffeeStock;

// ! bagaimana banyak nilai? gunakan object literal
// module.exports = { coffeeStock, isCoffeeMachineReady };

// ! export ES6 module
// export default coffeeStock;

// ! export ES6 module banyak nilai
export { coffeeStock, isCoffeeMachineReady };

/*
exports: {
    coffeeStock: { arabica: 100, robusta: 150, liberica: 200 },
    isCoffeeMachineReady: true
},
*/
// console.log(module)