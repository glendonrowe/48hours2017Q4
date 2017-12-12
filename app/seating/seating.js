'use strict';

angular.module('myApp.seating', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/seating', {
    templateUrl: 'seating/seating.html',
    controller: 'SeatingCtrl'
  });
}])

.controller('SeatingCtrl', ['$http', function($http) {
  var vm = this;
  vm.blast = blast;
  vm.test;
  vm.init = init;

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

  function blast(){
   

      $http.get('http://icd10api.com/?code=A02.0&r=json&desc=long').then(function(response){
        console.log(response);
      });
  }
}]);