define('invoice-with-provider-controller', ['angular', 'invoice-with-provider-providers'], function (ng) {
    'use strict';

    angular.module('invoice-with-provider-controller', ['invoice-with-provider-providers'])
        .controller('AppInvoiceControllerWithProvider', ['CurrencyConverter', function (CurrencyConverter) {
            this.qty = 1;
            this.cost = 2;
            this.inCurr = 'EUR';
            var converter = new CurrencyConverter();

            this.currencies = converter.currencies;

            this.total = function total(outCurr) {
                return converter.convert(this.qty * this.cost, this.inCurr, outCurr);
            };
            this.pay = function pay() {
                window.alert("Thanks!");
            };
        }]);
});



