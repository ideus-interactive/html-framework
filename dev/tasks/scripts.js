'use strict';

module.exports = function (gulp, $, CONFIG) {
  /**
   * DEV
   */
  gulp.task('js:dev', function () {
    let COUNT_BUILD = 0; // Флаг первой сборки
    const bundler = $.watchify($.browserify(CONFIG.PATH.SRC.JS.BUNDLE, {
      debug: true
    }))
      .transform($.babelify, {
        "presets": ["es2015"],
        "plugins": ["transform-object-rest-spread"]
      });

    bundler.on('update', rebundle);

    function rebundle() {
      return bundler.bundle()
        .on('error', showError)
        .pipe($.source('bundle.js'))
        .pipe($.buffer())
        .pipe($.sourcemaps.init({loadMaps: true}))
        .pipe($.sourcemaps.write('./'))
        .pipe($.if(COUNT_BUILD++, $.sizereport({gzip: true})))
        .pipe(gulp.dest(CONFIG.PATH.DIST.JS.BUNDLE));
    }

    return rebundle();
  });
  /**
   * PROD
   */
  gulp.task('js:prod', function () {
    return $.browserify(CONFIG.PATH.SRC.JS.BUNDLE, {})
      .transform($.babelify, {
        "presets": ["es2015"],
        "plugins": ["transform-object-rest-spread"]
      })
      .bundle().on('error', showError)
      .pipe($.source('bundle.js'))
      .pipe($.streamify($.uglify(/*{ mangle: false }*/)))
      .pipe(gulp.dest(CONFIG.PATH.DIST.JS.BUNDLE))
  });
  /**
   * SHOW ERROR
   */
  const showError = function (err) {
    $.notify.onError({
      title: 'Gulp',
      message: "Error: <%= error %>",
      sound: "Beep"
    })(err);
    this.emit('end');
  };
};

