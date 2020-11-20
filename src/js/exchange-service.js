export default class ExchangeService {
  static getRates() {
    return fetch(`https://v6.exchangerate-api.com/v6/13dd1392322b2440d5a55de6/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}