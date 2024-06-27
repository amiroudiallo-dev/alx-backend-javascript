import Building from './5-building';

/**
 * Represents SkyHighBuilding class.
 */
export default class SkyHighBuilding extends Building {
  /**
   * create a new @see {@link SkyHighBuilding}
   * @param {Building} sqft - the sqft Building number.
   * @param {Number} floors - the numbers of floors in the SkyHighBuilding.
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
