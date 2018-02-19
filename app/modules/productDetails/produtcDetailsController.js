(function () {
    var productDetailsApp = angular.module('productDetailsApp', []);
    productDetailsApp.controller('productDetailsController', function ($scope, $routeParams, priceListService) {
       
        priceListService.getData()
            .then(function (priceList) {
                $scope.priceList = priceList;
            });
        
        var productId = Number($routeParams.maskId);
        priceListService.getProductById(productId)
        .then(function (productView) {
                $scope.productView = productView;
            });

  
        
        
        
        
        
        
        
        
        
        
        
});   
})()
