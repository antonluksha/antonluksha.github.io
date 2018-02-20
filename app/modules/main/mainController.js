(function () {
    var mainApp = angular.module('mainApp', []);
    mainApp.controller('mainController', function ($scope, priceListService) {

        $(document).ready(function () {

//            var liders = [1, 3, 5, 7, 8, 9];
//
//            $scope.liderList = [];
//
//            var findLiders = function () {
//                liders.forEach(function (productId) {
//                    priceListService.getProductById(productId)
//                        .then(function (objProductIdElem) {
//                        console.log(objProductIdElem);
//                        var productIdElem = objProductIdElem;
//                            $scope.liderList.push(productIdElem);
//                        });
//                });
//            }; findLiders();
            
            var liderSlider = $('#liderSlider');

            liderSlider.owlCarousel({
                margin: 10,
                navSpeed: 500,
                nav: false,
                rewind: true,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });





            var mainSlider = $('#mainSlider');


            mainSlider.on('initialized.owl.carousel', function (event) {
                var $currentItem = $('.owl-item', mainSlider).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-in]");
                setAnimation($elemsToanim, 'in');
            });

            mainSlider.owlCarousel({
                items: 1,
                margin: 0,
                navSpeed: 500,
                nav: true,
                rewind: true,
                nav: true,
                loop: true,
                navText: ['', ''],
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
            });





            // add animate.css class(es) to the elements to be animated
            function setAnimation(_elem, _InOut) {
                // Store all animationend event name in a string.
                // cf animate.css documentation
                var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

                _elem.each(function () {
                    var $elem = $(this);
                    var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

                    $elem.addClass($animationType).one(animationEndEvent, function () {
                        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
                    });
                });
            }

            mainSlider.on('changed.owl.carousel', function (event) {

                var $currentItem = $('.owl-item', mainSlider).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-in]");

                setAnimation($elemsToanim, 'in');
            });




            function switchClass(i) {
                var lis = $('#home-news > div');
                lis.eq(i).removeClass('home_header_on');
                lis.eq(i).removeClass('home_header_out');
                lis.eq(i = ++i % lis.length).addClass('home_header_on');
                lis.eq(i = ++i % lis.length).addClass('home_header_out');
                setTimeout(function () {
                    switchClass(i);
                }, 3500);
            }
            switchClass(-1);









        });


    });
})()
