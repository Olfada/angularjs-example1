(function (){

  'use strict';

angular.module('MyFirstAPP',[])
.controller('MyFirstController',function($scope){
  $scope.name="Olfa";
  $scope.sayhello=function(){
    return "Hello Olfa";
  };

});

})();
