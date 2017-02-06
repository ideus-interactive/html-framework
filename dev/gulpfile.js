'use strict';

const gulp       = require('gulp');
const requireDir = require('require-dir');
const $          = require('gulp-load-plugins')();

$.browserify  = require('browserify');
$.babelify    = require('babelify');
$.watchify    = require('watchify');
$.source      = require('vinyl-source-stream');
$.buffer      = require('vinyl-buffer');
$.browserSync = require("browser-sync").create();
$.path        = require('path');
$.merge       = require('merge-stream');
$.del         = require('del');

const SRC  = './src';
const DIST = '../assets';

const CONFIG = {
  GULP_DEBUG: false,
  PROXY: 'localhost/html-framework/',
  PATH: {
    SRC: {
      ROOT: SRC,
      FONTS: `${SRC}/fonts/**/*.*`,
      IMG: [`${SRC}/img/**/*.*`, `!${SRC}/img/sprite/*`],
      SPRITE: `${SRC}/img/sprite/**/*.*`,
      JS: {
        BUNDLE: `${SRC}/js/bundle.js`
      },
      STYLES: {
        SASS: `${SRC}/sass/**/*.scss`,
        SPRITE: `${SRC}/sass/`
      }
    },
    DIST: {
      ROOT: DIST,
      FONTS: `${DIST}/fonts/`,
      IMG: `${DIST}/img/`,
      JS: {
        BUNDLE: `${DIST}/js/`
      },
      STYLES: {
        CSS: `${DIST}/css/`
      }
    }
  }
};

// Load application tasks
(function () {
  let dir = requireDir('./tasks');
  Object.keys(dir).forEach(function (key) {
    dir[key] = dir[key](gulp, $, CONFIG);
  });
}());

/**
 * Developer tasks
 */
gulp.task('dev', gulp.series('clean', gulp.parallel('sprite:dev', 'styles:dev', 'js:dev', 'fonts:dev', 'img:dev'), 'sizereport'));
gulp.task('dev:watch', gulp.series('dev', 'watch'));
gulp.task('dev:serve', gulp.series('dev', gulp.parallel('watch', 'serve')));

/**
 * Production tasks
 */
gulp.task('prod', gulp.series('clean', gulp.parallel('sprite:prod', 'styles:prod', 'js:prod', 'fonts:prod', 'img:prod'), 'sizereport:prod'));
