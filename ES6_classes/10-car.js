export default class Car {
  constructor(brand = undefined, motor = undefined, color = undefined) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const newCar = new this.constructor();
    return newCar;
  }
}
