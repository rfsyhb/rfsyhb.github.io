class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    howl() {
        return 'Auuuuuuuuu';
    }
}

// TODO 2
// * Common JS
// module.exports = Wolf;

// * ES6 Module
export default Wolf;