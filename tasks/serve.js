'use strict';

module.exports = function (gulp, $, CONFIG) {
  /**
   * SERVE
   */
  gulp.task('serve', function () {
    $.browserSync.init({
      server: {
        baseDir: CONFIG.PATH.DIST.ROOT
      },
      tunnel: false
    });
    $.browserSync.watch(`${CONFIG.PATH.DIST.ROOT}/css/**/*`).on('change', $.browserSync.reload);
    $.browserSync.watch(`${CONFIG.PATH.DIST.ROOT}/js/**/*`).on('change', $.browserSync.reload);
    $.browserSync.watch(`${CONFIG.PATH.DIST.ROOT}/*.html`).on('change', $.browserSync.reload);
  });
};