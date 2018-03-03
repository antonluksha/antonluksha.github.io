(function () {
    var productDetailsApp = angular.module('productDetailsApp', ["720kb.socialshare"]);
    productDetailsApp.controller('productDetailsController', function ($scope, $routeParams, $location, priceListService) {
       
        priceListService.getData()
            .then(function (priceList) {
                $scope.priceList = priceList;
            });
        
        var productId = Number($routeParams.maskId);
        priceListService.getProductById(productId)
        .then(function (productView) {
                $scope.productView = productView;
            });

    $scope.productUrl = $location.url();
        
        
        
        
        
        
        
        
        
});   
})()
