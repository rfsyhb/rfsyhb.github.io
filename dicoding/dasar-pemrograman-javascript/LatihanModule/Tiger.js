class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    growl() {
        return 'grrrrrrr';
    }
}

// TODO 1
// * Common JS Module
// module.exports = Tiger;

// * ES6 Module
export default Tiger;