/// <vs AfterBuild='cshtml-to-templatecache' />

var gulp = require('gulp'),
    runSequence = require('run-sequence');

require('gulp-task-loader')('gulp/html-templates/cshtml-to-templatecache');
require('gulp-task-loader')('gulp/register-modules-in-requirejs');
require('gulp-task-loader')('gulp/html-templates/watch-cshtml-files');