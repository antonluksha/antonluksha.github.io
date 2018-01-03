(function () {

        var priceListService = angular.module('priceListService', []);
        priceListService.factory('priceListService', function ($http, $q) {

                var getData = function () {
                    var deferred = $q.defer();
                    $http({
                        method: 'GET',
                        url: '/app/data/priceList.json'
                    }).
                    then(function success(response) {
                        deferred.resolve(response.data);
                    }, function error(response) {
                        deferred.reject(response.status);
                    });
                    return deferred.promise;
                };

                var getProductById = function (id) {

                    var promise = getData()
                        .then(function (priceList) {
                            var product =
                                priceList.find(function (el) {
                                    return el.id === id
                                })
                            return product;
                        });
                    return promise;
                };

                    return {
                        getData,
                        getProductById,
                    };
                })
        })()
