(function () {
    var contactsApp = angular.module('contactsApp', []);
    contactsApp.controller('contactsController', function ($scope) {


        $(document).ready(function () {
            $('#contactsFeedback').wiFeedBack({
                fbScript: 'blocks/wi-feedback.php',
                fbLink: false,
                fbColor: '#121212'
            });
            
            
        });




    });

})()
