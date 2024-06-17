const Bicycle = require("./bicycle");

class ElectricBicycle extends Bicycle {
    constructor(model, year, price, style, frame, tire, range, speed) {
        super(model, year, price, style, frame, tire);
        this.range = range;
        this.maxSpeed = speed;
    }
}



module.exports = ElectricBicycle;