module.exports = {
  bowerComponents: {
    files: [{
      expand: true,
      dot: true,
      flatten: true,
      filter: 'isFile',
      cwd: 'bower',
      dest: '<%= appConfig.rutaapp %>/js/libs',
      src: [

      ]
    }]
  },
  devTemplates: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutatemplates %>',
      dest:'<%= appConfig.rutadev %>/html',
      src: ['**/*']
    }]
  },
  devImages: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutaapp %>/img',
      dest:'<%= appConfig.rutadev %>/img',
      filter: 'isFile',
      src: [
        '!spr*',
        '!base64',
        '*'
      ]
    }]
  },
  devGeneratedSprites: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutaapp %>/img/spr',
      dest:'<%= appConfig.rutadev %>/img/spr',
      filter: 'isFile',
      src: ['**/*']
    }]
  },
  devCSS: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutaapp %>/css',
      dest:'<%= appConfig.rutadev %>/css',
      filter: 'isFile',
      src: ['**/*']
    }]
  },
  devFonts: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutaapp %>/fonts',
      dest:'<%= appConfig.rutadev %>/fonts',
      src: ['**/*']
    }]
  },
  devJs: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutaapp %>/js',
      dest:'<%= appConfig.rutadev %>/js',
      src: ['**/*']
    }]
  },
  devTests: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutaapp %>/test',
      dest:'<%= appConfig.rutadev %>/test',
      src: ['**/*']
    }]
  },
  


  proTemplates: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutatemplates %>',
      dest:'<%= appConfig.rutapro %>/html',
      src: ['**/*']
    }]
  },
  proImages: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutaapp %>/img',
      dest:'<%= appConfig.rutapro %>/img',
      filter: 'isFile',
      src: [
        '!spr*',
        '!base64',
        '*'
      ]
    }]
  },
  proGeneratedSprites: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutaapp %>/img/spr',
      dest:'<%= appConfig.rutapro %>/img/spr',
      filter: 'isFile',
      src: ['**/*']
    }]
  },
  proFonts: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutaapp %>/fonts',
      dest:'<%= appConfig.rutapro %>/fonts',
      src: ['**/*']
    }]
  },
  proCSSie8: {
    files: [{
      expand: true,
      cwd: '<%= appConfig.rutatmp %>/css',
      dest:'<%= appConfig.rutapro %>/css',
      src: ['ie8.css'],
      filter: 'isFile'
    }]
  }

  
};
