module.exports = {
  options: {
    
    httpPath:           '..',
    relativeAssets:     true,

    basePath:           '<%= appConfig.rutaapp %>',
    cssDir:             'css',
    sassDir:            'sass',
    fontsDir:           'fonts',
    imagesDir:          'img',
    javascriptsDir:     'js',
    generatedImagesDir: 'img/spr',
    httpGeneratedImagesPath: '../img/spr',
    httpFontsPath:      '../fonts/',


    //importPath:       '<%= appConfig.rutaapp %>/bower_components',
    assetCacheBuster: false,
    noLineComments: true,
    debugInfo: false
  },
  dev: {
    options: {
      httpPath: '/',
      relativeAssets: false,
    }
  },
  pro: {
    options: {
      httpPath: '..',
      relativeAssets: true,
    }
  }
};