export default class Conversion {
  constructor (countryCode, rate, amountToConvert, cashConverted) {
    this.countryCode = countryCode;
    this.rate = rate;
    this.amountToConvert = amountToConvert
    this.cashConverted = 0;
  }
  convertMonies() {
    this.cashConverted = (this.amountToConvert * this.rate).toFixed(2);
    return this.cashConverted;
  }
}