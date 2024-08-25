// 1. Define the CarCl class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  // 2. Accelerate method
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  // 3. Brake method
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  // 4. Getter for speedUS
  get speedUS() {
    return this.speed / 1.6;
  }

  // 5. Setter for speedUS
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
// 6. Create a new car
const car1 = new CarCl("Ford", 120);
// 7. Experiment with methods and getter/setter
car1.accelerate();
car1.brake();
console.log(`Speed in mi/h: ${car1.speedUS}`);
car1.speedUS = 50;
console.log(`Speed in km/h after setting in mi/h: ${car1.speed}`);
