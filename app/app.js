(function() {
 
    var pageApp = angular.module("pageApp", [
        "ngRoute",
        "navigationApp",
        "mainApp",
        "aboutApp",
        "productListApp",
        "productDetailsApp",
        "newsApp",
        "newsDetailsApp",
        "contactsApp",
        "cartApp",
        "priceListService",
        "cartService",
        "newsListService"
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
    .when("/contacts", {
        templateUrl : "/app/modules/contacts/contactsView.html",
        controller : "contactsController"
    })
    .when("/products", {
        templateUrl : "/app/modules/productList/productListView.html",
        controller : "productListController"
    })    
    .when("/products/masks/id/:maskId", {
        templateUrl : "/app/modules/productDetails/productDetailsView.html",
        controller : "productDetailsController"
    })
    .when("/news", {
        templateUrl : "/app/modules/news/newsView.html",
        controller : "newsController"
    })
    .when("/news/id/:newsId", {
        templateUrl : "/app/modules/newsDetails/newsDetailsView.html",
        controller : "newsDetailsController"
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



