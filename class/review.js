const Vehicle = require('./vehicle');
const Tester = require('./tester');

class Review {
    constructor(vehicle, tester, rating, text) {
        this.vehicle = vehicle;
        this.tester = tester;
        this.starRating = rating;
        this.text = text;
    }

    // INSTANCE METHODS
    addReview() {
        // console.log(this.vehicle.reviews);
        this.vehicle.reviews.push(this);
        this.tester.reviews.push(this);
    }
    
    // STATIC CLASS METHODS
    static filterByStars(rating, ...reviews) {
        console.log(reviews);
        return reviews.filter(review => review.starRating === rating)
    }
}


// local testing

// let tester1 = new Tester("Bob Jones");
// let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
// let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");

// let tester2 = new Tester("Desiree Smith");
// let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
// let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

// let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
// let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

// // review1.addReview();
// // review2.addReview();
// // review3.addReview();
// // review4.addReview();

// // console.log(vehicle1.reviews.length);
// // console.log(vehicle1.reviews.includes(review3));
// // console.log(tester1.reviews.length);
// // console.log(tester1.reviews.includes(review4));

// let filtered = Review.filterByStars(3, review1, review2, review3);
// console.log(Array.isArray(filtered));
// console.log(filtered.length);
// console.log(filtered[0].starRating);
// console.log(filtered);
// let filtered2 = Review.filterByStars(5, review1, review2, review3, review4);
// console.log(filtered2);




module.exports = Review;