define('app-module', ['angular', 'subApp-module', 'app-converter-controller', 'app-converter-service'], function (ng) {
    'use strict';
    ng.module('app-module', ['app-converter-controller', 'app-converter-service', 'subApp-module']);
});
