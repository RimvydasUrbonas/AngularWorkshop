define('user-messages-factory', [], function () {
    'use strict';
    var factory = function ($timeout) {
        var userMessages = function (messages) {
            var container = {},
                successLevel = 'success',
                cautionLevel = 'caution',
                errorLevel = 'error';

            function init() {
                messages.error = [];
                messages.success = [];
                messages.caution = [];
            };

            function pushMessage(level, message, done) {
                var msg = {};
                msg.level = level;
                msg.text = message;

                messages[level].push(msg);
                if (typeof done == "function") {
                    done(msg);
                }
            }

            function removeMessage(message) {
                if (messages && messages[message.level]) {
                    var index = messages[message.level].indexOf(message);
                    if (index > -1) {
                        messages[message.level].splice(index, 1);
                    }
                }
            }

            function clearMessages(level) {
                if (messages[level]) {
                    messages[level] = [];
                }
            }

            container.messages = messages;

            container.addCaution = function (message) {
                pushMessage(cautionLevel, message);
            };

            container.addError = function (message) {
                pushMessage(errorLevel, message);
            };

            container.addSuccessPermanent = function (messageText) {
                pushMessage(successLevel, messageText);
            };

            container.addSuccess = function (messageText) {
                pushMessage(successLevel, messageText, function (msg) {
                    $timeout(function () {
                        removeMessage(msg);
                    }, 3000);
                });
            };

            container.addSuccessList = function (list) {
                for (var index in list) {
                    var msg = list[index];
                    container.addSuccess(msg);
                };
            };

            container.addSuccessListPermanent = function (list) {
                for (var index in list) {
                    var msg = list[index];
                    container.addSuccessPermanent(msg);
                };
            };

            container.addErrorsList = function (list) {
                for (var index in list) {
                    var msg = list[index];
                    container.addError(msg);
                }
            };

            container.clearCautions = function () {
                clearMessages(cautionLevel);
            };

            container.clearErrors = function () {
                clearMessages(errorLevel);
            };

            container.clearSuccess = function () {
                clearMessages(successLevel);
            };

            container.clearAll = function () {
                container.clearCautions();
                container.clearErrors();
                container.clearSuccess();
            };

            container.singleSuccess = function (message) {
                container.clearAll();
                container.addSuccess(message);
            };

            container.singleError = function (message) {
                container.clearAll();
                container.addError(message);
            };

            container.singleCaution = function (message) {
                container.clearAll();
                container.addCaution(message);
            };

            init();

            return container;
        };

        return userMessages;
    }

    return factory;
});
