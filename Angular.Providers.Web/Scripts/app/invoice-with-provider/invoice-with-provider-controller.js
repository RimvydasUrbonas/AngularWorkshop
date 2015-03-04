define('invoice-with-provider-controller', [], function () {
    'use strict';

    function invoiceController(CurrencyConverter, currencyConverterService, converterProvider) {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        var converter = converterProvider;

        this.currencies = converter.currencies;

        this.total = function total(outCurr) {
            return converter.convert(this.qty * this.cost, this.inCurr, outCurr);
        };
        this.pay = function pay() {
            window.alert("Thanks!");
        };
    };

    invoiceController.$inject = ['CurrencyConverter', 'currencyConverterService', 'converter'];

    return invoiceController;
});



