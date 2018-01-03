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
        
         $(document).ready(function () {
            
            $('#orderProduct').wiFeedBack({
                fbScript: 'blocks/wi-feedback.php',
                fbLink: '.orderProduct-link',
                fbColor: '#7952b3'
            });
        });

  
});   
})()
