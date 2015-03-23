var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({ lazy: true }),
    config = require('../../gulp.config.js')(),
    utils = require('../../utils/utils.js')(),

    processFile = require('../process-cshtml-file/process-cshtml-file.js');

function task() {

    var filterTouchedFiles = $.filter(isFileTouched);

    return gulp
        .src(config.cshtmlFiles)
        .pipe($.watch(config.cshtmlFiles))
        .pipe(filterTouchedFiles)
        .pipe(processFile(null));
};

function isFileTouched(file) {
    return file.event !== undefined;
}

module.exports = task;
