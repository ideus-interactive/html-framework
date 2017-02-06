'use strict';

module.exports = function(gulp, $, CONFIG) {
  gulp.task('sizereport', function() {
    return gulp.src([
      `${CONFIG.PATH.DIST.STYLES.CSS}main.css`,
      `${CONFIG.PATH.DIST.JS.BUNDLE}/bundle.js`
    ])
      .pipe($.sizereport({ gzip: true }));
  });
  /**
   * PROD
   */
  gulp.task('sizereport:prod', function() {
    return gulp.src([
      `${CONFIG.PATH.DIST.STYLES.CSS}main.css`,
      `${CONFIG.PATH.DIST.JS.BUNDLE}/bundle.js`
    ])
      .pipe($.sizereport({ gzip: true }));
  });
};
