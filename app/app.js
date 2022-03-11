var app = angular.module("myApp", ["ngRoute"]);
app.controller('myController',['$scope','$location',function($scope,$location){
    $scope.loginClick = function(){
        window.alert("登录成功！")
      console.log($location.url('/')) 
    }
}])
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'./pages/home.html'})
    .when('/login',{templateUrl:'./pages/login.html'})
    .otherwise({redirectTo:'/login'});
}]);