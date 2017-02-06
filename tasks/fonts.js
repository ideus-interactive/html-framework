'use strict';

module.exports = function(gulp, $, CONFIG) {
  /**
   * DEV
   */
  gulp.task('fonts:dev', function() {
    return gulp.src(CONFIG.PATH.SRC.FONTS, {since: gulp.lastRun('fonts:dev')})
      .pipe(gulp.dest(CONFIG.PATH.DIST.FONTS));
  });
  /**
   * PROD
   */
  gulp.task('fonts:prod', function() {
    return gulp.src(CONFIG.PATH.SRC.FONTS, {since: gulp.lastRun('fonts:prod')})
      .pipe(gulp.dest(CONFIG.PATH.DIST.FONTS));
  });
};
