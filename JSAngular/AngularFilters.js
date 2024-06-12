let app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
  $scope.names = [
    { name: 'Jani', country: 'Norway' },
    { name: 'Carl', country: 'Sweden' },
    { name: 'Margareth', country: 'England' },
    { name: 'Hege', country: 'Norway' },
    { name: 'Joe', country: 'Denmark' },
    { name: 'Gustav', country: 'Sweden' },
    { name: 'Birgit', country: 'Denmark' },
    { name: 'Mary', country: 'England' },
    { name: 'Kai', country: 'Norway' }
  ];
  $scope.today = new Date();
  $scope.obj = {};
  $scope.obj.name = "Victor";
  $scope.obj.country = "Spain";
  $scope.dollars = 100.222
});