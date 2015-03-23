var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({ lazy: true }),
    config = require('../../gulp.config.js')(),
    utils = require('../../utils/utils.js')(),
    del = require('del'),
    runSequence = require('run-sequence'),

    processSigleFile = require('../process-single-cshtml-file/process-single-cshtml-file.js');

module.exports = task;

function task() {

    utils.log('Compiling files');

    del(config.templatesAppFolder, function () {
        runSequence('process-cshtml-files', 'create-template-cache');
    });

    gulp.task('process-cshtml-files', function () {

        return gulp.src(config.cshtmlFiles)
            .pipe(processSigleFile(true));
    });

    gulp.task('create-template-cache', function () {

        utils.log('Creating cache');

        setTimeout(function () {

            return gulp
                .src(config.templatesAppFolder + '\\**\\*.html')
                .pipe($.minifyHtml({ empty: true }))
                .pipe($.angularTemplatecache(
                    config.templateCache.file,
                    config.templateCache.options
                ))
                .pipe(gulp.dest(config.scriptsAppFolder));

        }, 500);
    });
};
