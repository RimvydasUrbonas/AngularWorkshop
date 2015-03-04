require.config({
    enforceDefine: false,
    baseUrl: '/scripts/',
    paths: {
        'jquery': 'libs/jquery-1.10.2',
        'modernizr': 'libs/modernizr-2.6.2',
        'bootstrap': 'libs/bootstrap',
        'respond': 'libs/respond',
        'angular': "libs/angular.min",
        'app-module': "app/app-module",
        'app-invoice-controller': "app/app-invoice-controller",
        'invoice-with-provider-module': "app/invoice-with-provider/invoice-with-provider-module",
        'invoice-with-provider-controller': "app/invoice-with-provider/invoice-with-provider-controller",
        'invoice-with-provider-factory': "app/invoice-with-provider/invoice-with-provider-factory",
        'invoice-with-provider-service': "app/invoice-with-provider/invoice-with-provider-service",
        'invoice-with-provider-provider': "app/invoice-with-provider/invoice-with-provider-provider",
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