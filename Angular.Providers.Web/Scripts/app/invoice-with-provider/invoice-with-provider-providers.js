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
        ]).service('currencyConverterService', [function () {
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
        ]).provider('converter', function() {
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

                // let's assume that the UnicornLauncher constructor was also changed to
                // accept and use the useTinfoilShielding argument
                return new converter(factor);
            }];
        });
});