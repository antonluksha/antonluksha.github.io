(function () {
    var mainApp = angular.module('mainApp', []);
    mainApp.controller('mainController', function ($scope) {

        $(document).ready(function () {

            var mainSlider = $('#mainSlider');
            mainSlider.owlCarousel({
                items: 1,
                nav: true,
                loop: true,
                navText: ['', ''],
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
            });



        });


    });
})()
