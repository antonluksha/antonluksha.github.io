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

 $(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});


    });
})();
