'use strict';

module.exports = function(gulp, $, CONFIG) {
  /**
   * DEV
   */
  gulp.task('html:dev', function() {
    return gulp.src(CONFIG.PATH.SRC.HTML, {since: gulp.lastRun('html:dev')})
      .pipe(gulp.dest(CONFIG.PATH.DIST.HTML))
  });
  /**
   * PROD
   */
  gulp.task('html:prod', function() {
    return gulp.src(CONFIG.PATH.SRC.HTML, {since: gulp.lastRun('html:prod')})
      .pipe(gulp.dest(CONFIG.PATH.DIST.HTML));
  });
};
