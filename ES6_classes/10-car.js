export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be string typed');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('motor must be string typed');
    }
    if (typeof color !== 'string') {
      throw new TypeError('color must be string typed');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return {
      brand: this._brand,
      motor: this._motor,
      color: this._color,
    };
  }
}
