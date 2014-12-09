module.exports = {
  options: {
    prettify: {
        indent: 2
    },
    marked: {
      sanitize: false
    },
    flatten: true,
    layoutdir: '<%= appConfig.rutaapp %>/html/layouts',
    layout: 'pages.hbs',
    browser_sync: false,
    partials: [
      '<%= appConfig.rutaapp %>/html/partials/**/*.hbs'
    ]
  },
  pages: {
    options: {
      layout: 'pages.hbs',
    },
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutaapp %>/html/pages/',
      src: ['*.hbs'],
      dest: '<%= appConfig.rutatemplates %>',
      ext: '.html'
    }]
  }
};