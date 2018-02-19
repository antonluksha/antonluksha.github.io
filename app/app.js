(function() {
 
    var pageApp = angular.module("pageApp", [
        "ngRoute",
        "navigationApp",
        "mainApp",
        "aboutApp",
        "productListApp",
        "productDetailsApp",
        "contactsApp",
        "newsApp",
        "cartApp",
        "priceListService",
        "cartService"
    ]);
    
    
    pageApp.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/app/modules/main/mainView.html",
        controller : "mainController"
    })
    .when("/cart", {
        templateUrl : "/app/modules/cart/cartView.html",
        controller : "cartController"
    })
    .when("/main", {
        templateUrl : "/app/modules/main/mainView.html",
        controller : "mainController"
    })
    .when("/about", {
        templateUrl : "/app/modules/about/aboutView.html",
        controller : "aboutController"
    })
    .when("/products", {
        templateUrl : "/app/modules/productList/productListView.html",
        controller : "productListController"
    })
    .when("/contacts", {
        templateUrl : "/app/modules/contacts/contactsView.html",
        controller : "contactsController"
    })
    .when("/news", {
        templateUrl : "/app/modules/news/newsView.html",
        controller : "newsController"
    })    
    .when("/products/masks/id/:maskId", {
        templateUrl : "/app/modules/productDetails/productDetailsView.html",
        controller : "productDetailsController"
    })
    .otherwise({
        templateUrl : "/app/modules/main/mainView.html",
        controller : "mainController"
    });
    $locationProvider.html5Mode(true);
  
}]);

pageApp.controller('pageController', ['$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
}]);

})()



