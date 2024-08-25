// 1. Constructor function for Car
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// 2. Accelerate method
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 3. Brake method
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 4. Create 2 Car objects
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// 5. Experiment with accelerate and brake methods
car1.accelerate();
car1.brake();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake();
