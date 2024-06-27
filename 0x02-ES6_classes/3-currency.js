/**
 * Represents a currency.
 */
export default class Currency {
  /**
   * create a new @see {@link Currency}.
   * @param {String} code - the symbol of the currency.
   * @param {String} name - the name of the currency.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * @returns {@link code}.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the code of the currency.
   */
  set code(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Code must be a string!');
    }
    this._code = value;
  }

  /**
   * @returns {@link name}.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the currency.
   */
  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string!');
    }
    this._name = value;
  }

  /**
   * Creates full string representation of currency.
   * @returns {@link String}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
