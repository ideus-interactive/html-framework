'use strict';

module.exports = function (gulp, $, CONFIG) {
  /**
   * SERVE
   */
  gulp.task('serve', function () {
    $.browserSync.init({
      proxy: CONFIG.PROXY,
      tunnel: false
    });
    $.browserSync.watch(`${CONFIG.PATH.DIST.ROOT}/css/**/*`).on('change', $.browserSync.reload);
    $.browserSync.watch(`${CONFIG.PATH.DIST.ROOT}/js/**/*`).on('change', $.browserSync.reload);
    $.browserSync.watch(`../**/*.php`).on('change', $.browserSync.reload);
  });
};