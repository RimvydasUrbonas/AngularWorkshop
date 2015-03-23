define('invoice-controller', [], function () {
    'use strict';
    var controller = function ($scope, UserMessagesFactory, invoiceService) {
        $scope.messages = {};
        $scope.formData = {};
        $scope.formStatus = 'Form';

        $scope.formData.qty = 1;
        $scope.formData.cost = 2;
        $scope.formData.inCurr = 'EUR';

        $scope.currencies = ['USD', 'EUR', 'CNY'];
        $scope.usdToForeignRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };

        $scope.total = function total(outCurr) {
            return $scope.convertCurrency($scope.formData.qty * $scope.formData.cost, $scope.formData.inCurr, outCurr);
        };
        $scope.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
            return amount * $scope.usdToForeignRates[outCurr] / $scope.usdToForeignRates[inCurr];
        };
        $scope.pay = function pay() {
            invoiceService.pay($scope.formData).then(function(msg) {
                $scope.formStatus = 'Submited';
                messages.addSuccess(msg);
            }, function(error) {
                messages.addError(error);
            });
        };

        var messages = new UserMessagesFactory($scope.messages);

        $scope.RemoveMessage = function(msgs, msg) {
            if (msgs && msg) {
                var idx = msgs.indexOf(msg);
                if (idx != -1) {
                    msgs.splice(idx, 1); // The second parameter is the number of elements to remove.
                }
            }
        };
    }

    controller.$inject = ['$scope', 'UserMessagesFactory', 'invoiceService'];

    return controller;
});



