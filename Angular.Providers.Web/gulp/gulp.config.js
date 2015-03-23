module.exports = function () {

    var viewsPath = 'Views\\App\\',
        scriptsPath = 'Scripts',
        scriptsAppPath = scriptsPath + '\\app',
        templatesPath = 'Templates',
        templatesAppPath = templatesPath + '\\app';

    var config = {

        viewsPath: viewsPath,
        scriptsAppPath: scriptsAppPath,
        templatesAppPath: templatesAppPath,

        viewsFolder: '.\\' + viewsPath,
        scriptsFolder: '.\\' + scriptsPath,
        scriptsAppFolder: '.\\' + scriptsAppPath,
        templatesAppFolder: '.\\' + templatesAppPath,

        cshtmlFiles: '.\\' + viewsPath + '**\\*.cshtml',

        temp: '.\\tmp\\',

        fileExtensions: {
          
            cshtml: '.cshtml',
            html: '.html'
        },

        templateCache: {
            file: 'app-templates.js',
            options: {
                module: 'app-templates',
                standAlone: false,
                root: '/Templates/app/',                
                templateHeader: 'define("<%= module %>", [\'angular\'], function(angular){  angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {\n',
                templateFooter: '\n}]);\n});'
            }
        },

        templaterUtility: '.\\bin\\Angular.Providers.TemplateBuilder.exe',

        requireJs: {
            siteMainFile: '.\\' + scriptsPath + '\\site-main.js',
            folders: ['app', 'libs', 'infrastructure'],
            replacementPatternStart: '// @import (.*?) //',
            replacementPatternEnd: '// @endimport //'
        }
    };

    return config;
};



