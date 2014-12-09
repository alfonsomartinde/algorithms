module.exports = {
  js: {
    files: [
      '<%= appConfig.rutaapp %>/js/**/*.js', 
      '<%= appConfig.rutaapp %>/js/indr/*.js', 
      '!<%= appConfig.rutaapp %>/js/libs/**/*.js'
    ],
    tasks: ['jshint', 'newer:copy:devJs', 'jasmine'],
    options: {livereload:'<%= connect.options.livereload %>'}
  },
  assemble: {
    files: ['<%= appConfig.rutaapp %>/html/**/*.hbs'],
    tasks: ['assemble', 'newer:copy:devTemplates','newer:copy:devCSS', 'newer:copy:devJs', 'newer:copy:devImages'],
    options: {livereload:'<%= connect.options.livereload %>'}
  },
  compass: {
    files: ['<%= appConfig.rutaapp %>/sass/**/*.{scss,sass}'],
    tasks: ['compass:dev','copy:devCSS'],
    options: {livereload:'<%= connect.options.livereload %>'}
  },
  imagenes: {
    files: ['<%= appConfig.rutaapp %>/img/**/*.{gif,jpeg,jpg,png,svg,webp}'],
    tasks: ['newer:copy:devImages'],
    options: {livereload:'<%= connect.options.livereload %>'}
  },
  test: {
    files: ['<%= appConfig.rutaapp %>/test/spec/**/*.js'],
    tasks: ['jshint', 'newer:copy:devTests', 'jasmine'],
    options: {livereload:'<%= connect.options.livereload %>'}
  }
};