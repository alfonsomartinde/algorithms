;(function () {
  "use strict";
  module.exports = function(grunt) {

    var appConfig = {
      rutaapp: 'app',
      rutadev: 'dev',
      rutapro: 'pro',
      rutatmp: '.tmp',
      rutatemplates: 'app/tmpl'
    };

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {

      configPath: process.cwd() + '/grunt',
      init: true,
      config: {
        appConfig: appConfig
      },

      //loadGruntTasks: false,
      loadGruntTasks: {
        pattern: 'assemble',
        config: require('./package.json'),
        scope: 'devDependencies'
      }
    });

    grunt.registerTask('server_dev', [
      'connect:livereload',
      //'browser_sync:dev',
      'watch'
    ]);

    grunt.registerTask('server_pro', [
      'connect:pro',
      'browser_sync:pro'
    ]);

    grunt.registerTask('default', [
      'clean:dev',
      'copy:bowerComponents',
      //'bower-install',
      'jshint',
      'concurrent:dev',
      'concurrent:copydev',
      'concurrent:clean',
      'jasmine',
      'server_dev'
    ]);

    grunt.registerTask('pro', [
      'clean:pro',
      'copy:bowerComponents',
      'concurrent:pro',
      'autoprefixer',
      'useminPrepare',
      'concat',
      'uglify',
      'cssmin',
      'usemin',
      'htmlmin',
      'concurrent:copypro',
      'concurrent:clean',
      'server_pro'
    ]);

  };
}());