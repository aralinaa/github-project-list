// directive for loader while on request
AppModule.directive('loaderSpin', function () {
    return{
        restrict: 'EA',
        scope:false,
        template: '<div id="spinner-wrapper" ng-show="loader"><div id="spinner-mask"></div><span class="spinner"></span></div>'
    }
});
