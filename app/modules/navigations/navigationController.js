(function () {
    var navigationApp = angular.module('navigationApp', []);
    navigationApp.controller('navigationController', function ($scope) {

        $('.main-nav li a').on('click', function () {
            $('#drop-down-cbox').prop("checked", false);
        });
        
        $('.text').html(function (i, html) {
            var chars = $.trim(html).split("");

            return '<span>' + chars.join('</span><span>') + '</span>';
        });

  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $(".scrollup").fadeIn();
      } else {
          $(".scrollup").fadeOut();
      }
  }); 

  $(".scrollup").click(function(){
      $("html, body").animate({ 
        scrollTop: 0 
      }, 400);
  });


    });

})()
