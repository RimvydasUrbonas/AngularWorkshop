define('invoice-service', [], function () {
    'use strict';
    var service = function ($q) {

        this.pay = function (data) {
            var deferred = $q.defer();

            if (!data || data.qty < 1) {
                deferred.reject("Error paying!!");
            } else {
                deferred.resolve("Successfully payed!!!");
            }

            return deferred.promise;
        };
    };

    service.$inject = ['$q'];

    return service;
});



