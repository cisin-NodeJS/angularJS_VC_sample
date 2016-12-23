var app = angular.module("starter", ['ngRoute', 'angular.filter'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'template/Home.html',
      controller: 'homeCtrl'
    })
    .when('/article', {
      templateUrl: 'template/Article.html',
      controller: 'homeCtrl'
    })
})

app.controller('homeCtrl', function($scope, $http, $rootScope, $location) {
  $rootScope.path = 'http://192.168.2.3/api/'
  $scope.listArticle = function() {
    $http({
        url: 'http://dev.vg.cisinlive.com/angular_demo/api.php/product',
        dataType: "json",
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .success(function(data) {
        $rootScope.data = data;
      })
      .error(function(err) {
        console.log(err);
      });
  }

  $scope.listCategory = function() {
    $http({
        url: 'http://dev.vg.cisinlive.com/angular_demo/api.php/category',
        dataType: "json",
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .success(function(data) {
        $rootScope.categories = data;
        $scope.selectedOption = $rootScope.categories[0];
      })
      .error(function(err) {
        console.log(err);
      });
  }

  $scope.articleDetail = function(id) {
    console.log(id)
    $http({
        url: 'http://dev.vg.cisinlive.com/angular_demo/api.php/product/' + id,
        dataType: "json",
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .success(function(data) {
        $rootScope.article = data;
        $location.path('/article');
      })
      .error(function(err) {
        console.log(err);
      });
  }
})
