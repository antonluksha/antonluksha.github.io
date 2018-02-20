(function () {
    var newsDetailsApp = angular.module('newsDetailsApp', []);
    newsDetailsApp.controller('newsDetailsController', function ($scope, $routeParams, newsListService) {
        
        var viewId = Number($routeParams.newsId);
        newsListService.getNewsById(viewId)
        .then(function (newsView) {
                $scope.newsView = newsView;
            });
        
        
        
        
        $scope.getin = function(){ 
            
            
            
            
            
            
            return $scope.newsView.url   
        };
        
        
        

  
    
        
        
        
        
        
        
        
        
        
        
});   
})()
