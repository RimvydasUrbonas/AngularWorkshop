define('app-module', ['angular', 'subApp-module'], function (ng) {
    'use strict';
    ng.module('app-module', ['subApp-module']);

    require(['app-converter-controller', 'app-converter-service']);
});
