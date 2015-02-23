define('subApp-module', ['angular', 'subApp-converter-controller', 'subApp-directive'], function (ng) {
    'use strict';

    ng.module('subApp-module', ['subApp-converter-controller', 'subApp-directive']);
});