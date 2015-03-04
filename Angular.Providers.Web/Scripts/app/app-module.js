define('app-module', ['angular', 'app-invoice-controller', 'invoice-with-provider-module'], function (ng, invoiceController) {
    'use strict';

    ng.module('app-module', ['invoice-with-provider-module'])
    .controller('AppInvoiceController', invoiceController);
});
