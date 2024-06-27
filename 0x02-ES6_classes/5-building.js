/**
 * Represents building class.
 */
export default class Building {
  /**
   * create new @see {@link Building}
   * @param {Number} sqft - the sqft of the building.
   */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('sqft must be a number!');
    }
    this._sqft = value;
  }
}
