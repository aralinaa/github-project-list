module.exports = function (grunt) {

  
  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    //configured a tasks 
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          // 'destination': 'source'
          'src/css/style.css' : 'src/css/sass/style.css.scss'
        }
      }
    },
    concat : {
      js: {
        src : [ "vendor/js/jquery/**/*.js", "vendor/js/angular/**/*.js", "vendor/js/angular-route/**/*.js",
                "vendor/js/notification/**/*.js", "vendor/js/bootstrap/**/*.js", "vendor/js/marked/marked.js", 
                "vendor/js/marked/highlight.min.js", "vendor/js/marked/angular-md.min.js",
                
                "src/js/services/data-service.js", "src/js/services/utility-service.js", 
                "src/js/modules/**/*.js", "src/js/services/github-service.js", "src/js/controllers/**/*.js", 
                "src/js/directives/**/*.js",
                "src/js/app.js"
              ],
        dest : "dist/app.js"
      },
      css: {
        src : [ "vendor/css/bootstrap.css", "vendor/css/bootstrap.css","vendor/css/angular-growl.css",
                "src/css/typo.css", "src/css/common.css", "src/css/github.css", "src/css/style.css"
              ],
        dest : "dist/app.css"
      }
    },
    uglify : {
        tasks :{
          files : {
            'dist/all.app.min.js' : ["dist/app.js"]
          }
        }
    },
    cssmin: {
      tasks : {
        files: {
          'dist/all.app.min.css': ["dist/app.css"]
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: '**/*.js',
        tasks: ['uglify']
      }
    }
  });
  
  //setup the application workflow
  //load a task from NPM module 
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Grunt tasks
  grunt.registerTask('default', ['sass','concat','cssmin','uglify', 'watch']);

};
