module.exports = {
  options: {
    port: 9000,
    hostname: '*',
    base: '.',
    keepalive: false,
    livereload: 35729,
    open: 'http://localhost:<%= connect.options.port %>/html'
  },
  livereload: {
    options: {
      base: ['<%= appConfig.rutadev %>/']
    }
  },
  pro: {
    options: {
      keepalive: true,
      livereload: false,
      base: ['<%= appConfig.rutapro %>/']
    }
  }
};
