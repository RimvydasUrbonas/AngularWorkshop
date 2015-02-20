define('subApp-module', ['angular'], function (ng) {
    'use strict';

    ng.module('subApp-module', []);

    require(['subApp-converter-controller', 'subApp-directive']);
});