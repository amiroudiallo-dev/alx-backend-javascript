import Currency from './3-currency';

/**
 * Represents Pricing class.
 */
export default class Pricing {
  /**
   * creates a new @see {@link Pricing}
   * @param {Number} amount - the amount of the pricing.
   * @param {Currency} currency - the currency of the pricing.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number!');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be type of Currency!');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Amount must be a number!');
    }
    if (typeof (conversionRate) !== 'number') {
      throw new TypeError('Conversion rate must be a number!');
    }
    return amount * conversionRate;
  }
}
