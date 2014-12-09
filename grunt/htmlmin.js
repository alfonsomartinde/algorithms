module.exports = {
  pro: {
    options: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeCommentsFromCDATA: true,
      removeEmptyAttributes: false,
      removeOptionalTags: true,
      removeRedundantAttributes: true
    },
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutapro %>/html',
      src: '{,*/}*.html',
      dest:'<%= appConfig.rutapro %>/html'
    }]
  }
};