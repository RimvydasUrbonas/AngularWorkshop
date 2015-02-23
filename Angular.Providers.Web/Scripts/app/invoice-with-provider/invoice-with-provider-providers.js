define('invoice-with-provider-providers', ['angular'], function (ng) {
    'use strict';

    angular.module('invoice-with-provider-providers', [])
        .factory('CurrencyConverter', [function () {

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
        ]);
});



