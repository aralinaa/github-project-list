AppModule.factory('gitHubService',['$http', function() {
    
    
    var dataService = {};

    // service to set and getter for user and repo
    dataService.getUserRepo = function () {
      return this.userRepo;
    }
    
    dataService.setUserRepo = function ( userRepo ) {
      this.userRepo = userRepo;
    }
    
    dataService.getUserDetails = function () {
      return this.userDetails;
      //var d = $deffred
    }
    
    dataService.setUserDetails = function ( userDetails ) {
      this.userDetails = userDetails;
    }
    
    return dataService;
}]);
