(function () {
    var newsApp = angular.module('newsApp', []);
    newsApp.controller('newsController', function ($scope, newsListService) {

        newsListService.getNewsList()
            .then(function (newsList) {
                $scope.newsList = newsList;
            });


    });

})()
