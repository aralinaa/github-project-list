var GLOBAL_TEMPLATES_VARS = {
  // if you need to load all new html template files after
  // deployment and then give same folder name to this variable
  tplPath: '/templates/'
};
/**
 * Main AngularJS Web Application
 */
var AppModule = angular.module('AppModule', ['angular-growl','ngRoute', 'serviceModule', 'yaru22.md']);

// growl library for notification
AppModule.config(['growlProvider', function(growlProvider) {
    growlProvider.globalTimeToLive(6000000); // notification will be shown for 6 seconds
    growlProvider.globalDisableCountDown(true);
}]);
// main controller which is always present in all the pages, we can have common methods inside this controller to use any where
AppModule.controller('MainController', ['$scope', 'dataService', 'utilityService',
  function ( $scope, dataService, utilityService ) {
    // flag used to show page data loader, false will not show the loader
    $scope.loader = false;
    /**
     * Start the loader during request to api (call before request)
     */
    $scope.startLoader = function () {
        $scope.loader = true;
    };
    /**
     * Stop the loader after success (call after request complete (success/error))
     */
    $scope.stopLoader = function () {
        $scope.loader = false;
    };
}]);