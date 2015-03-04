define('invoice-with-provider-module', [
    'angular',
    'invoice-with-provider-controller',
    'invoice-with-provider-factory',
    'invoice-with-provider-service',
    'invoice-with-provider-provider'
], function (ng, invoiceController, converterFactory, converterService, converterProvider) {
    'use strict';

    ng.module('invoice-with-provider-module', [])
        .controller('AppInvoiceControllerWithProvider', invoiceController)
        .factory('CurrencyConverter', converterFactory)
        .service('currencyConverterService', converterService)
        .provider('converter', converterProvider)
        .config(["converterProvider", function (converterProvider) {
            converterProvider.setFactor(100);
        }]);
});
