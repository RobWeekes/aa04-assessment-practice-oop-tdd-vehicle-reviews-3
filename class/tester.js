const Bicycle = require('./bicycle');
const ElectricBicycle = require('./electric-bicycle');
const Review = require('./review');
// const Vehicle = require('./vehicle');  // only for local testing

class Tester {
    constructor(name) {
        this.name = name;
        this.reviews = [];
    }

    submitReview(vehicle, rating, text) {
        if(!vehicle.validate()) {
            throw new Error("Cannot submit review for invalid vehicle.")
        }

        if(vehicle instanceof Bicycle) {
            console.log(this.tester);
            this.bikeTester = true;
        }

        if(vehicle instanceof ElectricBicycle) {
            this.eBikeTester = true;
        }

        let review = new Review(vehicle, this, rating, text);
        review.addReview();
        // console.log(review);
        return review;
    }
}

// local testing 

// let tester = new Tester("Bob Jones");
// let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);

// let submittedReview = tester.submitReview(validVehicle, 3, "Very cozy.");
// // check review is an instance of the review class
// console.log(submittedReview);
// console.log(tester.reviews.length);
// console.log(tester.reviews[0].text);

// console.log(validVehicle.reviews.length);
// console.log(validVehicle.reviews[0].vehicle);
// console.log(validVehicle.reviews[0].tester);
// console.log(validVehicle.reviews[0].text);

// let tester = new Tester("Bob Jones")
// let invalidVehicle = new Vehicle(5);
// console.log(invalidVehicle.validate());
// console.log(tester.submitReview(invalidVehicle, 5, "This vehicle is not valid"))


// let tester = new Tester("Bob Jones");
// let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);
// tester.submitReview(validVehicle, 3, "Very cozy.");

// console.log(tester.submitReview(validVehicle, 3, "Very cozy."));
// console.log(tester.bikeTester);

// let validBicycle = new Bicycle("Trek 520", 2023, 1829);
// tester.submitReview(validBicycle, 5, "Great for touring and gravel");
// console.log(tester.bikeTester);
// console.log(tester.eBikeTester);

// let validEBike = new ElectricBicycle("Specialized", 2010, 600, "Touring", 18, 26, 30, 45);
// tester.submitReview(validEBike, 1, "Terrible range");
// console.log(tester.bikeTester);
// console.log(tester.eBikeTester);




module.exports = Tester;