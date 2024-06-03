let app = angular.module("myApp", []);
app.run(function($rootScope){
    $rootScope.color="red"
});
app.controller("myController", function($scope){
    $scope.firstname = "Fernando";
    $scope.lastname = "Paricio";
    $scope.fullName = function(){
        return $scope.firstname + " " + $scope.lastname;
    }
});
app.controller("colorController", function($scope){
    $scope.color="blue";
});