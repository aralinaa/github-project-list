//directive for header and footer  
AppModule.directive('headerTpl', function () {
  return{
    restrict: 'E',
    scope: false,
    templateUrl: GLOBAL_TEMPLATES_VARS.tplPath + 'shared/header.html',
    controller: $.noop
  };
});

AppModule.directive('footerTpl', function () {
  return{
    restrict: 'E',
    scope: false,
    templateUrl: GLOBAL_TEMPLATES_VARS.tplPath + 'shared/footer.html',
    controller: $.noop
  };
});
