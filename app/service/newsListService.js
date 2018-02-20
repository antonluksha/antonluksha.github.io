(function () {

        var newsListService = angular.module('newsListService', []);
        newsListService.factory('newsListService', function ($http, $q) {

                var getNewsList = function () {
                    var deferred = $q.defer();
                    $http({
                        method: 'GET',
                        url: '/app/data/newsList.json'
                    }).
                    then(function success(response) {
                        deferred.resolve(response.data);
                    }, function error(response) {
                        deferred.reject(response.status);
                    });
                    return deferred.promise;
                };

                var getNewsById = function (id) {

                    var promise = getNewsList()
                        .then(function (newsList) {
                            var news =
                                newsList.find(function (el) {
                                    return el.id === id
                                })
                            return news;
                        });
                    return promise;
                };

                    return {
                        getNewsList,
                        getNewsById
                    };
                })
        })()