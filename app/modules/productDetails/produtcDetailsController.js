(function () {
    var productDetailsApp = angular.module('productDetailsApp', []);
    productDetailsApp.controller('productDetailsController', function ($scope, $routeParams, $location, priceListService) {

        priceListService.getData()
            .then(function (priceList) {
                $scope.priceList = priceList;
            });

        var productId = Number($routeParams.maskId);
        priceListService.getProductById(productId)
            .then(function (productView) {
                $scope.productView = productView;
            
              $scope.productUrl = $location.url();


        var productShareBlock = document.getElementById("productShare");
        var productShareBlockInit = Ya.share2(productShareBlock, {});
            
            });

      






    });
})()
