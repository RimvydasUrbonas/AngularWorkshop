define('subApp-module', ['angular', 'subApp-converter-controller', 'subApp-directive'],
    function (ng, subConverterController, subDirective) {
    'use strict';

    ng.module('subApp-module', [])
        .controller('subConverterController', subConverterController)
        .directive('subConverterDirective', subDirective);
});