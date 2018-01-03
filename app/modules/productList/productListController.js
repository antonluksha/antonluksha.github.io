(function () {
    var productListApp = angular.module('productListApp', []);
    productListApp.controller('productListController', function ($scope, priceListService, cartService) {


        priceListService.getData()
            .then(function (priceList) {
                $scope.priceList = priceList;
            })
    });
})();
