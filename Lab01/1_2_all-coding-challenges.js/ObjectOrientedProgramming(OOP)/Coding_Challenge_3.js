// 1. Define the Car constructor function
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}
// 2. Add methods to Car prototype
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
// 3. Define the EV constructor function
function EV(make, speed, charge) {
  Car.call(this, make, speed); // Call the Car constructor
  this.charge = charge;
}
// Inherit from Car
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
// 4. Implement chargeBattery method
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
// 5. Override the accelerate method
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
// 6. Create an electric car object and experiment
const ev1 = new EV("Tesla", 120, 23);
ev1.accelerate();
ev1.brake();
ev1.chargeBattery(90);
console.log(`Battery charged to: ${ev1.charge}%`);
ev1.accelerate();
