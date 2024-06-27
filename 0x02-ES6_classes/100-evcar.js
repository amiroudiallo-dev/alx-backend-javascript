import Car from './10-car';
/**
 * Represents EVCar class.
 * @author https://www.github.com/amiroudiallo-dev
 */
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
