define('app-module', ['angular', 'app-invoice-controller', 'invoice-with-provider-module'], function (ng) {
    'use strict';
    ng.module('app-module', ['app-invoice-controller', 'invoice-with-provider-module']);
});
