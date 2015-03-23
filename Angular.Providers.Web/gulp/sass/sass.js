module.exports = function (flavour) {

    var gulp = require('gulp');
    var sass = require('gulp-sass');

    var utils = require('../utils/utils.js')();

    utils.log('Compiling SASS');

    return gulp
        .src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
};
