const Vehicle = require('./vehicle');

class Bicycle extends Vehicle {
    constructor(model, year, price, style, frame, tire) {
        super(model, year, price);
        this.style = style;
        this.frameSize = frame;
        this.tireSize = tire;
    }
}


module.exports = Bicycle;