'use strict';

module.exports = function(gulp, $, CONFIG) {
  gulp.task('watch', function() {
    /**
     * STYLES
     */
    gulp.watch(CONFIG.PATH.SRC.STYLES.SASS, gulp.series('styles:dev'));
    /**
    * FONTS
    */
    gulp.watch(CONFIG.PATH.SRC.FONTS, gulp.series('fonts:dev'));
    /**
     * IMAGES
     */
    gulp.watch(CONFIG.PATH.SRC.IMG, gulp.series('img:dev')).on('unlink', function(filepath){
      var filePathFromSrc = $.path.relative($.path.resolve('src'), filepath);
      var destFilePath    = $.path.resolve('dist', filePathFromSrc);
      $.del.sync(destFilePath);
    });
    /**
     * SPRITE
     */
    gulp.watch('./src/img/sprite/**/*.*', gulp.series('sprite:dev'));
  });
};
