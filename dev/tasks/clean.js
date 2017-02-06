'use strict';

module.exports = function (gulp, $, CONFIG) {
  gulp.task('clean', function () {
    return $.del([CONFIG.PATH.DIST.ROOT], { force: true });
  });
};