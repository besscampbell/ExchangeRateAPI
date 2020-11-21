import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';
import Conversion from './js/conversion.js';

function displayRates(response, object) {
  if (response.conversion_rates) {
    $("#show-rate").text(`${object.amountToConvert} USD equals ${object.cashConverted} in ${object.countryCode}`);
  } else {
    $("#show-error").text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  $("#money-button").click(function() {
    let promise = ExchangeService.getRates();
    promise.then(function(response) {
      const body = JSON.parse(response);
      const{USD, AED, ARS, AUD, BGN, BRL} = body.conversion_rates;
      let conversion = new Conversion();
      conversion.amountToConvert = (parseInt($("#amount").val())).toFixed(2);
      conversion.countryCode = $("#convert-code").val();
      if (conversion.countryCode === "AED"){
        conversion.rate = AED;
      } else if (conversion.countryCode === "ARS") {
        conversion.rate = ARS;
      } else if (conversion.countryCode === "AUD") {
        conversion.rate = AUD;
      } else if (conversion.countryCode === "BGN") {
        conversion.rate = BGN;
      } else if (conversion.countryCode === "BRL") {
        conversion.rate = BRL;
      } else {
        conversion.rate = USD
      }
      
      
      conversion.convertMonies();
      console.log(conversion);
      displayRates(body, conversion);

    });
  });
});