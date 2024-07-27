import Currency from './3-currency.js';
export default class Pricing {
  constructor(amount, currency) {
    if (!Number.isInteger(amount)) throw TypeError('amount must be a number');
    if (!(currency instanceof Currency)) throw TypeError('Currency must be a Currency');
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newamount) {
    if (!Number.isInteger(newamount)) throw new TypeError('Amount must be a number');
    this._amount = newamount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newcurrency) {
    if (!(currency instanceof Currency)) throw TypeError('currency must be a Currency');
    this._currency = newcurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Both amount and conversion rate must be numbers.');
    }
    return amount * conversionRate;
  }
}
