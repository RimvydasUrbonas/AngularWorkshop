define('invoice-with-provider-provider', ['angular'], function (ng) {
    'use strict';
    function provider() {
        var factor = 1;

        this.setFactor = function(fact) {
            factor = fact;
        }

        var converter = function Converter(factorParam) {
            var factor = factorParam || 1;

            this.currencies = ['USD', 'EUR', 'CNY'];
            this.usdToForeignRates = {
                USD: 1,
                EUR: 0.74,
                CNY: 6.09
            };

            this.convert = function (amount, inCurr, outCurr) {
                return (amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr]) * factor;
            };
        };

        this.$get = [function converterFactory() {
            return new converter(factor);
        }];
    }

    return provider;
});