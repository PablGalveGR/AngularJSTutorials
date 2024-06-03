let app = angular.module("myApp", []);
app.controller("getRuns", function($scope, $http){
    $http.get("localhost:8080/api/runs").then(function (response){
        $scope.data = response.data;
    });
});