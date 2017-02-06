'use strict';

module.exports = function (gulp, $) {
  gulp.task('clean', function () {
    return $.del(['dist']);
  });
};