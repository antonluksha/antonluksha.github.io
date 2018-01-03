(function () {

    var cartService = angular.module('cartService', []);
    cartService.factory('cartService', function () {




        var readCart = function () {
            var cartList;
                if (localStorage.cart) {
                  cartList = JSON.parse(localStorage.getItem("cart"));
                }  else {
                    cartList = [];
                }
            return cartList;
        };



        var pushCart = function (cart) {
            localStorage.setItem("cart", JSON.stringify(cart));
        };

        var clearCart = function () {
            localStorage.removeItem("cart");
        };





        return {
            readCart,
            pushCart,
            clearCart,
        };
    });
})();
