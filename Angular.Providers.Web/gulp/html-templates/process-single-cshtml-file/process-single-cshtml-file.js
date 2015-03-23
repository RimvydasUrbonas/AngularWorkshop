var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({ lazy: true }),
    config = require('../../gulp.config.js')(),
    utils = require('../../utils/utils.js')(),

    through = require('through2'),
    syncExec = require('sync-exec'),
    del = require('del');

module.exports = task;

function task(force) {

    return through.obj(function (file, enc, cb) {

        var destinationFileName = getFileName(file);

        if (!!force || file.event !== 'unlink') {
            compileTemplate(file, destinationFileName);
        } else {
            deleteTemplate(file, destinationFileName);
        }
        
        cb(null, file);
    });
}

function compileTemplate(file, destinationFileName) {

    try {

        var razorFile = ' ~' + file.history[0].replace(file.cwd, '').replace(/\\/g, '/'),
            results = syncExec(config.templaterUtility + razorFile);

        utils.log('-> ' + destinationFileName, 'green');

        return $.file(destinationFileName, results.stdout)
            .pipe(gulp.dest(config.templatesAppFolder));

    } catch (e) {

        console.log(e);
    }

    return null;
}

function deleteTemplate(file, destinationFileName) {

    var fileToDelete = config.templatesAppFolder + '\\' + destinationFileName;

    fileToDelete = utils.replaceAll(fileToDelete, '/', '\\');

    try {

        del(fileToDelete, function() {
            
            utils.log('-> ' + fileToDelete, 'red');
        });

    } catch (e) {

        console.log(e);
    } 
}

function getFileName(file) {

    var fileName = file.history[0];

    fileName = fileName.replace(file.cwd, '');
    fileName = fileName.replace('\\' + config.viewsPath, '');
    fileName = fileName.replace(config.viewsPath, '');
    fileName = utils.replaceAll(fileName, '\\\\', '/');

    fileName = fileName.replace(config.fileExtensions.cshtml, config.fileExtensions.html);

    return fileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();;
}
