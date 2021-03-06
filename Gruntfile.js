module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    karma: {
      unit: {
        options : {
          files: ['client/bower_components/angular/angular.js',
            'client/bower_components/angular-mocks/angular-mocks.js',
            'client/bower_components/angular-ui-router/release/angular-ui-router.js',
            'client/bower_components/angular-ui-codemirror/ui-codemirror.js',
            'tests/**/*.js',
            'client/game/**/*.js',
            'client/leaderboard/**/*.js',
            'client/app.js'
          ],
          basePath: '',
          frameworks: ['mocha', 'chai'],
          reporters: ['nyan'],
          port: 9876,
          colors: true,
          browsers: ['Chrome'],
          autoWatch: true,
          singleRun: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('tests', ['karma']);

};
