
'use strict'

angular.module('myApp.example', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/example', {
        templateUrl: 'example/example.html',
        controller: 'ExampleCtrl'
    });
}])
.controller('ExampleCtrl', [function(){
    var vm = this;
    vm.init = init;
    vm.referThem = referThem;
debugger;
    function init(){
        $(window).preloader({
            
                    // preloader selector
                    selector: '#preloader',
            
                    // Preloader container holder
                    type: 'document',
            
                    // 'fade' or 'remove'
                    removeType: 'fade',
            
                    // fade duration
                    fadeDuration: 750,
            
                    // auto disimss after x milliseconds
                    delay: 0
                    
                  });
    }

    function referThem(){
        debugger;
        console.log("we made it");
        swal({
        title: '<i>Quick</i> <u>example</u>',
        type: 'info',
        html:
            'You can use <b>bold text Michelle</b>, ' +
            '<a href="//github.com">links</a> ' +
            'and other HTML tags too, Yay!',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
        });
    }
}]);