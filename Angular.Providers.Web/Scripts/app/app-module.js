define('app-module', ['angular', 'invoice-module', 'shared-module'], function (ng) {
    'use strict';

    ng.module('app-module', ['invoice-module', 'shared-module']);
});
