var serviceModule = angular.module('serviceModule',[]);

serviceModule.factory('dataService',['$http', function($http) {
    var dataService = {};

    // call to server to get/post/update/delete data
    dataService.AGServer = {
        get: function(url){
            url = this.createUrl(url);
            return $http.get(url);
        },
        post: function (url, data) {
            url = this.createUrl(url);
            return $http.post(url, data);
        },
        put: function (url, data) {
            url = this.createUrl(url);
            return $http.put(url, data);
        },
        delete: function (url) {
            url = this.createUrl(url);
            return $http.delete(url);
        },
        createUrl: function(url){
            if(url.indexOf("?") == -1){
                url = url + "?";
            } else if(url[url.length -1] != "?"){
                url = url + "&";
            }
            return (url + dataService.token);
        }
    };
    
    
    dataService.getUserRepo = function () {
      return this.userRepo;
    }
    
    dataService.setUserRepo = function ( userRepo ) {
      this.userRepo = userRepo;
    }
    
    dataService.getUserDetails = function () {
      return this.userDetails;
    }
    
    dataService.setUserDetails = function ( userDetails ) {
      this.userDetails = userDetails;
    }
    
    dataService.gitHubRepoDetails = function( userName ) {
      var url = "//api.github.com/users/" + userName + "/repos" ;
      return $http.get(url);
    }
    
    dataService.gitHubUserDetails = function(  userName, $scope, service ) {
      var url = "//api.github.com/users/" + userName ;
      return $http.get(url);
    }
    
    dataService.gitHubRepoReadMeFileDetails = function ( userName, repoName ) {
      var url = "//api.github.com/repos/" + userName + "/" + repoName + "/readme";
      return $http.get(url);
    }
    
    return dataService;
}]);
