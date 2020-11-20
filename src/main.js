import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';
import Conversion from './js/conversion.js';

function displayRates(response) {
  if (response.conversion_rates) {
    $("#show-rate").text(`1 United States Dollar equals ${response.conversion_rates.AED} in United Arab Emirates Dirham`);
  } else {
    $("#show-error").text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  $("#money-button").click(function() {
    let promise = ExchangeService.getRates();
    promise.then(function(response) {
      const body = JSON.parse(response);
      const{USD, AED, ARS, AUD, BGN, BRL} = body.conversion_rates
      let conversion = new Conversion();
      conversion.amountToConvert = parseInt($("#amount").val());
      conversion.countryCode = $("#convert-to").val;
      conversion.rate = AED;
      conversion.convertMonies();
      console.log(conversion);
      displayRates(conversion);

    });
  });
});