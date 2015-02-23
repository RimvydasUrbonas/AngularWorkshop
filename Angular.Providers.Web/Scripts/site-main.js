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
        'app-invoice-controller': "app/app-invoice-controller"
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