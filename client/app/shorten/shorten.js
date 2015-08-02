angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
   $scope.Auth = Auth;
   $scope.link = {};

   $scope.addLink = function(){
      Links.addLink($scope.link)
      .then(function(){
        $location.path('/');
      })
      .catch(function (err) {
        console.log(err);
      });
   };
});