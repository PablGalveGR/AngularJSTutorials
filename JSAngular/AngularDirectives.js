let app = angular.module("myApp", []);
app.directive("myDirective", function(){
    return{
        template:"Directive data"
    };
});