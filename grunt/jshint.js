module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: [
    'Gruntfile.js',
    '<%= appConfig.rutaapp %>/js/**/*.js',
    '!<%= appConfig.rutaapp %>/js/libs/*',
    'test/spec/**/*.js'
  ]
};