'use strict';

module.exports = function(gulp, $) {
  gulp.task('sizereport', function() {
    return gulp.src(['./dist/css/main.css', './dist/js/bundle.js'])
      .pipe($.sizereport({ gzip: true }));
  });
  /**
   * PROD
   */
  gulp.task('sizereport:prod', function() {
    return gulp.src([
      './dist/css/main.css',
      './dist/js/bundle.js'
    ])
      .pipe($.sizereport({ gzip: true }));
  });
};
