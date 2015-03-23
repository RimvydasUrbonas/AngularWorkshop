require.config({
    enforceDefine: false,
    baseUrl: '/scripts/',
    paths: {
        'jquery': 'libs/jquery-1.10.2',
        'modernizr': 'libs/modernizr-2.6.2',
        'bootstrap': 'libs/bootstrap',
        'respond': 'libs/respond',
        'angular': "libs/angular.min",

        ////////// Section is auto-generated. Run Grunt task "arrange-dependencies" to re-create it /////////        
        // @import app //
 "app-module": "app/app-module",
 "app-templates": "app/app-templates",
 "invoice-controller": "app/invoice/invoice-controller",
 "invoice-module": "app/invoice/invoice-module",
 "invoice-service": "app/invoice/invoice-service",
 "user-messages-factory": "app/invoice/user-messages-factory",
// @endimport //
    },
    shim: {
        'jquery': [],
        'angular': { exports: 'angular', deps: ['jquery'] },
        'bootstrap': ['jquery'],
        'respond': [],
        'modernizr': []
    },
});

require(['jquery', 'angular', 'bootstrap', 'respond', 'modernizr', 'app-module'], function ($, angular) {
    angular.bootstrap(document.getElementById('main-app'), ['app-module']);
});