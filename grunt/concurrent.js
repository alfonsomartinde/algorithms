module.exports = {
  dev: [ 'assemble', 'compass:dev' ],
  pro: [ 'assemble', 'compass:pro' ],
  clean: [ 'clean:sass', 'clean:css', 'clean:generatedSprites', 'clean:templates', 'clean:tmp'],
  copydev: [ 'copy:devTemplates', 'copy:devImages', 'copy:devGeneratedSprites', 'copy:devCSS', 'copy:devFonts', 'copy:devJs', 'copy:devTests' ],
  copypro: [ 'copy:proTemplates', 'copy:proImages', 'copy:proGeneratedSprites', 'copy:proFonts', 'copy:proCSSie8' ]
};