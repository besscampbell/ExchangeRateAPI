import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';

function displayRates(response) {
  if (response.conversion_rates) {
    $("#show-rate").text(`1 United States Dollar equals ${response.conversion_rates.AED} in United Arab Emirates Dirham`);
  } else {
    $("#show-error").text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  $("#money-button").click(function() {
    // let amount = parseInt($("#amount").val());
    ExchangeService.getRates()
      .then(function(response){
        console.log(response);
        displayRates(response);
      });
  });
});