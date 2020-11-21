

export default class Conversion {
  constructor (countryCode, rate, amountToConvert, cashConverted) {
    this.countryCode = countryCode;
    this.rate = rate;
    this.amountToConvert = amountToConvert;
    this.cashConverted = 0;
  }

  matchCountry(body) {
    const{USD, AED, ARS, AUD, BGN, BRL} = body.conversion_rates;
    if( this.countryCode === "AED"){
      this.rate = AED;
    } else if (this.countryCode === "ARS") {
      this.rate = ARS;
    } else if (this.countryCode === "AUD") {
      this.rate = AUD;
    } else if (this.countryCode === "BGN") {
      this.rate = BGN;
    } else if (this.countryCode === "BRL") {
      this.rate = BRL;
    } else {
      this.rate = USD;
    }
  }
  
  convertMonies() {
    this.cashConverted = (this.amountToConvert * this.rate).toFixed(2);
    return this.cashConverted;
  }
}