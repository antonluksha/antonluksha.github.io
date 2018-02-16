(function () {
    var mainApp = angular.module('mainApp', []);
    mainApp.controller('mainController', function ($scope) {

        $(document).ready(function () {

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
