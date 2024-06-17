const Tester = require('./tester');

class Vehicle {
    constructor(model, year, price) {
        this.modelName = model;
        this.year = year;
        this.price = price;
        this.reviews = [];
    }

    // INSTANCE METHODS
    validate() {
        console.log(this.modelName)
        console.log(this.modelName === undefined)
        if(this.modelName && this.year && this.price && this.year > 1950 && this.year < 2100) return true;
        else return false;
    }

    update(model, year, price) {
        if(year < 1950 || year > 2100) throw new Error("Year must be between 1950 and 2100");
        if(price <= 0) throw new Error("Price must be greater than 0");
        this.modelName = model;
        this.year = year;
        this.price = price;
    }

    getDetails() {
        return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`;
    }

    findReviewByTester(testerName) {
        for()
    }

    // STATIC CLASS METHODS

}


// local testing

// let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);
// let invalidVehicle = new Vehicle(5);
// console.log(validVehicle)
// console.log(validVehicle.validate());
// console.log(invalidVehicle.validate());


let tester1 = new Tester("Bob Jones");
let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");

let tester2 = new Tester("Desiree Smith");
let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

review1.addReview();
review2.addReview();
review3.addReview();
review4.addReview();

let filtered = Review.filterByStars(3, review1, review2, review3);
console.log(Array.isArray(filtered));
console.log(filtered.length);
console.log(filtered[0].starRating);
console.log(filtered);
let filtered2 = Review.filterByStars(5, review1, review2, review3, review4);
console.log(filtered2);

let filtered3 = vehicle1.findReviewByTester("Bob Jones");
console.log(filtered3);


module.exports = Vehicle;