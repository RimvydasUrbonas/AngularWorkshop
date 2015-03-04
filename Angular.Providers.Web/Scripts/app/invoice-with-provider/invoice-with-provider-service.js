define('invoice-with-provider-service', [], function() {
    'use strict';
    function service () {
        this.currencies = ['USD', 'EUR', 'CNY'];
        this.usdToForeignRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };

        this.convert = function (amount, inCurr, outCurr) {
            return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
        };
    }

    return service;
});