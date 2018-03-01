(function () {
    var productListApp = angular.module('productListApp', []);
    productListApp.controller('productListController', function ($scope, priceListService, cartService) {

        priceListService.getData()
            .then(function (priceList) {
                $scope.priceList = priceList;
                $scope.categoryList();
            });


        $scope.categoryList = function () {
            $scope.categorySort = ($scope.priceList || []). //======================= массив изначальный
            map(function (prod) {
                return prod.category;
            }).
            filter(function (cat, idx, arr) {
                return arr.indexOf(cat) === idx;
            });
        };

        $scope.subCategorysList = function (category) {
            $scope.SubFilter = {};
            $scope.subCategorySort = ($scope.priceList || []). //======================= массив изначальный
            map(function (prod) {
                if (prod.category == category) {
                    return prod.subCategory;
                }
            }).
            filter(function (sub, idx, arr) {
//                console.log(sub);
                if (sub && sub !== [] && sub !== "") {
                    return arr.indexOf(sub) === idx;
                }
            });

//            console.log($scope.subCategorySort);

        }

        // Variables - Public
        $scope.SubFilter = {};

        // Functions - Definitions
        $scope.filterSubByCategory = function (prod) { //фильтр по категориям или нет категорий
            return $scope.SubFilter[prod.subCategory] || noFilter($scope.SubFilter);
        }

        function noFilter(filterObj) { //нет категорий
            return Object.
            keys(filterObj).
            every(function (key) {
                return !filterObj[key];
            });
        }


        $scope.productAdvantage = false;

        $scope.listView = function () {
            $(".product").addClass("col-12 slideInUp");
            $(".productImg").addClass("col-sm-6 col-md-4");
            $(".productText").addClass("col-sm-6 col-md-8");
            $(".product").removeClass("col-lg-3 col-md-4 col-sm-6 text-center zoomIn");
            $(".gridView").removeClass("active");
            $(".listView").addClass("active");
            $scope.productAdvantage = true;
        };

        $scope.gridView = function () {
            $(".product").addClass("col-lg-3 col-md-4 col-sm-6 text-center zoomIn");
            $(".productImg").removeClass("col-sm-6 col-md-4");
            $(".productText").removeClass("col-sm-6 col-md-8");
            $(".product").removeClass("col-12 slideInUp");
            $(".listView").removeClass("active");
            $(".gridView").addClass("active");
            $scope.productAdvantage = false;
        };


        $scope.viewType = function () {
            if ($scope.productAdvantage) {
                $scope.listView();
            } else {
                $scope.gridView();
            }
        };

    });


})();
