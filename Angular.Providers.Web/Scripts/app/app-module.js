define('app-module', ['angular', 'app-converter-controller', 'app-converter-service', 'subApp-module'],
    function (ng, converterController, converterService) {
    'use strict';
        ng.module('app-module', ['subApp-module'])
            .controller('converterController', converterController)
            .service('converterService', converterService);
    });
