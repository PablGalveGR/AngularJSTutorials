function getTableHeaders(tableHeaders) {
  let headers = [];
  for (let i = 0; i < tableHeaders.length; i++) {
    let word = tableHeaders[i];
    let firstLetter = word[0];
    let finalWord = firstLetter.toUpperCase() + word.substr(1, word.length);
    headers[i] = finalWord;
    console.log(finalWord);
  }
  return headers
}
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
  console.log(Object.keys($scope.names[0]));
  $scope.tableHeaders = getTableHeaders(Object.keys($scope.names[0]));
  $scope.names2 = [
    { name: 'Jani', country: 'Norway', city :'AAAAA' },
    { name: 'Carl', country: 'Sweden', city :'BBBBBB' },
    { name: 'Margareth', country: 'England', city :'CCCCCC' },
    { name: 'Hege', country: 'Norway', city :'DDDDDD' },
    { name: 'Joe', country: 'Denmark', city :'EEEEEE' },
    { name: 'Gustav', country: 'Sweden', city :'FFFFFF' },
    { name: 'Birgit', country: 'Denmark', city :'GGGGGG' },
    { name: 'Mary', country: 'England',city :'HHHHHH' },
    { name: 'Kai', country: 'Norway', city :'IIIIIII' }
  ];
  $scope.tableHeaders2 = getTableHeaders(Object.keys($scope.names2[0]));
});