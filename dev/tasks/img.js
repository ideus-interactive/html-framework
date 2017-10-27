'use strict';

module.exports = function (gulp, $, CONFIG) {
  /**
   * DEV
   */
  gulp.task('img:dev', function () {
    return gulp.src(CONFIG.PATH.SRC.IMG, {since: gulp.lastRun('img:dev')})
      .pipe($.imagemin())
      .pipe($.rename(function (path) {
        const dir = path.dirname.split("\\").join('_');
        if (dir.length && dir != '.') {
          path.basename = `${dir}--${path.basename}`;
        } else {
          path.basename = `${path.basename}`;
        }
      }))
      .pipe($.rename({dirname: ''}))
      .pipe(gulp.dest(CONFIG.PATH.DIST.IMG));
  });
  /**
   * PROD
   */
  gulp.task('img:prod', function () {
    return gulp.src(CONFIG.PATH.SRC.IMG, {since: gulp.lastRun('img:prod')})
      .pipe($.imagemin())
        .pipe($.rename(function (path) {
          const dir = path.dirname.split("\\").join('_');
          if (dir.length && dir != '.') {
            path.basename = `${dir}--${path.basename}`;
          } else {
            path.basename = `${path.basename}`;
          }
        }))
      .pipe($.rename({dirname: ''}))
      .pipe(gulp.dest(CONFIG.PATH.DIST.IMG));
  });
};
