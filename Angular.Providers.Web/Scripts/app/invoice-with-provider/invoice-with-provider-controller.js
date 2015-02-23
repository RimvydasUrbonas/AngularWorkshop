define('invoice-with-provider-controller', ['angular', 'invoice-with-provider-providers'], function (ng) {
    'use strict';

    angular.module('invoice-with-provider-controller', ['invoice-with-provider-providers'])
        .controller('AppInvoiceControllerWithProvider', ['currencyConverter', function(currencyConverter) {
            this.qty = 1;
            this.cost = 2;
            this.inCurr = 'EUR';
            this.currencies = currencyConverter.currencies;

            this.total = function total(outCurr) {
                return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
            };
            this.pay = function pay() {
                window.alert("Thanks!");
            };
        }]);
});



