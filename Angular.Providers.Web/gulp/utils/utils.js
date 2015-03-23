module.exports = function () {

    var utils = {};

    utils.log = function (msg, color) {

        var $ = require('gulp-load-plugins')({ lazy: true });

        if (color === undefined) {

            color = 'yellow';
        }

        if (typeof (msg) === 'object') {

            for (var item in msg) {

                if (msg.hasOwnProperty(item)) {

                    $.util.log($.util.colors[color](msg[item]));
                }
            }

        } else {

            $.util.log($.util.colors[color](msg));
        }
    };

    utils.replaceAll = function (str, find, replace) {

        return str.replace(new RegExp(find, 'g'), replace);
    }

    utils.sleep = function (millis) {

        var date = new Date();
        var curDate = null;

        do {
             curDate = new Date();
        }
        while (curDate - date < millis);
    }

    return utils;
};
