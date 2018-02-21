(function () {
    var productListApp = angular.module('productListApp', []);
    productListApp.controller('productListController', function ($scope, priceListService, cartService) {

        priceListService.getData()
            .then(function (priceList) {
                $scope.priceList = priceList;
                $scope.categoryList();
            });

        $scope.categorySort = [];

        $scope.categoryList = function () {
            $scope.priceList.forEach(function (product) {
                var x = 0;
                $scope.categorySort.forEach(function (cat) {
                    if (cat !== product.category) {
                        x++
                    };
                    
                });
                if (x === $scope.categorySort.length) {
                    $scope.categorySort.push(product.category);
                }
            });
        };


        $scope.productAdvantage = false;
        
        $scope.listView = function(){
            $(".product").addClass("col-12 slideInUp");
            $(".productImg").addClass("col-sm-6 col-md-4");
            $(".productText").addClass("col-sm-6 col-md-8");
            $(".product").removeClass("col-lg-3 col-md-4 col-sm-6 text-center zoomIn");
            $(".gridView").removeClass("active");
            $(".listView").addClass("active");
            $scope.productAdvantage = true;
        };
        
        $scope.gridView = function(){
            $(".product").addClass("col-lg-3 col-md-4 col-sm-6 text-center zoomIn");
            $(".productImg").removeClass("col-sm-6 col-md-4");
            $(".productText").removeClass("col-sm-6 col-md-8");
            $(".product").removeClass("col-12 slideInUp");
            $(".listView").removeClass("active");
            $(".gridView").addClass("active");
            $scope.productAdvantage = false;
        };
        

$scope.viewType = function() {
    if ($scope.productAdvantage) {
        $scope.listView();
    }
    else {
        $scope.gridView();
    }
};







    });
})();
