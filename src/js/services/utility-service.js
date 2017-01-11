
// this service is used to have utility methods that can be
// used throughout the project, just inject this service in controller and use it
serviceModule.factory('utilityService', function () {
  var utility = {};

  // all messages for notifications
  utility.messages = {
    no_user_found: "No user found, you can look for some other user!",
    err_msg: "Some internal error occurred, please contact admin",
    no_readme_found: "No read me file found."
  };

  return utility;
});
