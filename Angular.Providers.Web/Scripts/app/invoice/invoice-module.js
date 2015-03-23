define('invoice-module', ['angular', 'invoice-controller', 'user-messages-factory', 'invoice-service'], function (ng, invoiceController, userMessagesFactory, invoiceService) {
    'use strict';

    ng.module('invoice-module', [])
    .controller('InvoiceController', invoiceController)
    .service('invoiceService', invoiceService)
    .factory('UserMessagesFactory', userMessagesFactory);
});
