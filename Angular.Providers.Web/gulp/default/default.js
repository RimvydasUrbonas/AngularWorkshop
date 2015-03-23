module.exports = function () {

    var gulp = require('gulp');
    var $ = require('gulp-load-plugins')({ lazy: true });

    var utils = require('../utils/utils.js')();

    utils.log('Running default task');

    return gulp
        .task('help', $.taskListing());
};
