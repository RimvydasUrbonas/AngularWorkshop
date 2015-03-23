var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({ lazy: true }),
    config = require('../gulp.config.js')(),
    utils = require('../utils/utils.js')(),
    runSequence = require('run-sequence');

module.exports = task;

var filenames = [],
    pairs = {},
    slices,
    filenameParts,
    usedFilenames = {}
errors = [];

function task() {

    utils.log('Registering RequireJS modules');

    gulp.task('extract-filenames', function () {

        var paths = [];

        config.requireJs.folders.forEach(function (item) {
            paths.push('.\\Scripts\\**\\' + item + '\\**\\*.js');
        });

        return gulp.src(paths)
            .pipe($.tap(function (file, t) {
                filenames.push(file.path.replace(file.base, ''));
            }));
    });

    gulp.task('create-replacements-list', function () {

        return function () {

            config.requireJs.folders.forEach(function (item) {
                pairs[item] = {};
            });

            filenames.forEach(function (item) {

                slices = item.split('\\');

                filenameParts = slices[slices.length - 1].split('.');

                filenameParts.splice(filenameParts.length - 1, 1);

                slices[slices.length - 1] = filenameParts.join('.');

                pairs[slices[0]][slices[slices.length - 1]] = slices.join('/');

                if (isFinite(usedFilenames[slices[slices.length - 1]])) {
                    usedFilenames[slices[slices.length - 1]] += 1;
                } else {
                    usedFilenames[slices[slices.length - 1]] = 1;
                }
            });
        }();
    });

    gulp.task('check-duplicate-filenames', function () {

        return function () {

            Object.keys(usedFilenames).forEach(function (fileName) {

                if (usedFilenames[fileName] > 1) {
                    errors.push('Duplicated file name found: \'' + fileName + '\'');
                }
            });

        }();

    });

    gulp.task('update-site-main-file', function () {

        if (errors.length === 0) {

            var pattern = new RegExp('(' + config.requireJs.replacementPatternStart.replace('/', '\/') + ')(\n|\r|.)*?(' + config.requireJs.replacementPatternEnd.replace('/', '\/') + ')', 'gi');

            return gulp.src([config.requireJs.siteMainFile])
                .pipe($.replace(pattern, regExpReplacement))
                .pipe(gulp.dest(config.scriptsFolder));

        } else {

            return function () {

                errors.forEach(function (item) {
                    utils.log(item, 'red');
                });
            }();
        }

        function regExpReplacement(match, p1, p2) {

            var result,
                jsonString;

            jsonString = JSON.stringify(pairs[p2], null, ' ');

            if (jsonString === undefined) {
                result = '// Folder \'' + p2 + '\' not defined in config.requireJs.folders variable' + '\r\n';
            } else {
                result = ((!!jsonString) && jsonString !== '{}' ? jsonString.replace('{\n', '').replace('\n}', ',') + '\r\n' : '');
            }

            result = config.requireJs.replacementPatternStart.replace('(.*?)', p2) + '\r\n' +
                     result +
                     config.requireJs.replacementPatternEnd;

            return result;
        }
    });

    runSequence(
        'extract-filenames',
        'create-replacements-list',
        'check-duplicate-filenames',
        'update-site-main-file'
    );
};

