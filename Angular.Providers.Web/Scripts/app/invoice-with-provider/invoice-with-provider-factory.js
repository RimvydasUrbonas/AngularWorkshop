define('invoice-with-provider-factory', [], function() {
    'use strict';
    function factory () {
        var converter = function Converter() {
            this.currencies = ['USD', 'EUR', 'CNY'];
            this.usdToForeignRates = {
                USD: 1,
                EUR: 0.74,
                CNY: 6.09
            };

            Converter.prototype.convert = function (amount, inCurr, outCurr) {
                return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
            };
        };

        return converter;
    }

    return factory;
});