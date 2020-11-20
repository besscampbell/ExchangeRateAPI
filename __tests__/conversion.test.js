import Conversion from '../src/js/conversion.js';

describe( 'Conversion', () => {
  let conversion;

  beforeEach(() => {
    conversion = new Conversion("AED", 3.67, 10, 0)
  });
  test('should correctly create a conversion object with properties for countryCode, rate, and cashConverted using the constructor', () => {
    expect(conversion.countryCode).toEqual("AED");
    expect(conversion.rate).toEqual(3.67);
    expect(conversion.amountToConvert).toEqual(10)
    expect(conversion.cashConverted).toEqual(0);
  });
  test('should correctly convert USD into')
});