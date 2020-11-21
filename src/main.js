import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';
import Conversion from './js/conversion.js';

function displayRates(response, object) {
  if (response.conversion_rates) {
    $("#show-rate").text(`${object.amountToConvert} USD ==> ${object.cashConverted} in ${object.countryCode}`);
  } else {
    $("#show-error").text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  $("#money-button").click(function() {
    let promise = ExchangeService.getRates();
    promise.then(function(response) {
      const body = JSON.parse(response);
      let conversion = new Conversion();
      conversion.amountToConvert = (parseInt($("#amount").val())).toFixed(2);
      conversion.countryCode = $("#convert-code").val();
      conversion.matchCountry(body);
      conversion.convertMonies();
      displayRates(body, conversion);
    });
  });
});