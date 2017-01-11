/**
 * Configure the Routes
 */
AppModule.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      // Home
      .when("/", {templateUrl: GLOBAL_TEMPLATES_VARS.tplPath + "/home.html", controller: "ProjectListController"})
      .when("/projects/:username/", {templateUrl: GLOBAL_TEMPLATES_VARS.tplPath + "/projectList.html", controller: "ProjectListDetails"})
      .when("/projects/:username/:reponame/readme", {templateUrl: GLOBAL_TEMPLATES_VARS.tplPath + "/readme.html", controller: "ReadMeCtrl"})
      // Static Pages
      .when("/about", {templateUrl: GLOBAL_TEMPLATES_VARS.tplPath + "/about.html", controller: $.noop})
      .when("/contact", {templateUrl: GLOBAL_TEMPLATES_VARS.tplPath + "/contact.html", controller: $.noop})
      // else 404
      //
      .otherwise("/404", {templateUrl: GLOBAL_TEMPLATES_VARS.tplPath + "/404.html", controller: $.noop});
      $locationProvider.html5Mode(true);
  }]);
