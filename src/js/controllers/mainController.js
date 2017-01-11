/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

AppModule.controller('ProjectListController', ['$scope','$location','dataService', 'growl', 'utilityService',
  function ($scope, $location, dataService, growl, utilityService) {
    $scope.getGitInfo = function () {
      $scope.userNotFound = false;
      $scope.loaded = false;
      $scope.startLoader();
      dataService.gitHubUserDetails($scope.user.userName)
      .then(function ( response ) {
         if ( response.data.name == "" ) {
           $scope.userNotFound = true;
         }else{
          dataService.setUserDetails(response.data);
          $scope.loaded = true;
          $location.path('/projects/' + $scope.user.userName); 
         }
      }, function () {
         $scope.stopLoader();
         $scope.userNotFound = true;
         growl.info(utilityService.messages.no_user_found);
         return;
      });
   };
}]);

AppModule.controller('ProjectListDetails',['$scope', '$routeParams','dataService', 'growl', 'utilityService',
  function ($scope, $routeParams, dataService, growl, utilityService) {
    $scope.startLoader();
    dataService.gitHubRepoDetails($routeParams.username)
      .then(function (data) {
        dataService.setUserRepo(data.data);
        $scope.repos = dataService.getUserRepo();
        $scope.stopLoader();
      });
    $scope.userDetails  = dataService.getUserDetails();
    if(!$scope.uesrDetails){
      $scope.startLoader(); 
      dataService.gitHubUserDetails($routeParams.username)
        .then(function ( response ) {
           if ( response.data.name == "" ) {
             $scope.userNotFound = true;
           }else{
            dataService.setUserDetails(response.data);
            //$scope.userDetails = response.data;
            $scope.loaded = true;
            $scope.userDetails  = dataService.getUserDetails();
            $scope.stopLoader();
           }
        }, function () {
          $scope.stopLoader();
          $scope.userNotFound = true;
          growl.info(utilityService.messages.no_user_found);
          return;
        });
    }
}]);

AppModule.controller('ReadMeCtrl',['$scope', '$http','$routeParams','dataService', 'growl', 'utilityService',
  function ($scope, $http, $routeParams, dataService, growl, utilityService) {
    $scope.startLoader();
    dataService.gitHubRepoReadMeFileDetails($routeParams.username , $routeParams.reponame )
      .then(function (data) {
        $scope.startLoader();
        $http.get(data.data.download_url).then(function (data) {
         $scope.readme = data.data;
         $scope.stopLoader(); 
        });
    }, function () {
      $scope.stopLoader();
      growl.info(utilityService.messages.no_readme_found);
    });
}]);

