'use strict';

module.exports = function(gulp, $, CONFIG) {
  let COUNT_BUILD = 0; // Флаг первой сборки
  /**
   * DEV
   */
  gulp.task('styles:dev', function() {
    return gulp.src(CONFIG.PATH.SRC.STYLES.SASS)
      .pipe($.if(CONFIG.GULP_DEBUG, $.debug()))
      .pipe($.sourcemaps.init())
      .pipe($.sass({ sourceComments: true, outputStyle: 'expanded' }).on('error', showError))
      .pipe($.autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
      .pipe($.sourcemaps.write('./'))
      .pipe($.if(COUNT_BUILD++, $.sizereport({gzip: true})))
      .pipe(gulp.dest(CONFIG.PATH.DIST.STYLES.CSS));
  });
  /**
   * PROD
   */
   gulp.task('styles:prod', function() {
    return gulp.src(CONFIG.PATH.SRC.STYLES.SASS)
      .pipe($.sass({outputStyle: 'compressed'}).on('error', showError))
      .pipe($.autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
      .pipe(gulp.dest(CONFIG.PATH.DIST.STYLES.CSS));
  });
  /**
   * SHOW ERROR
   */
  const showError = function (err) {
    $.notify.onError({
      title: 'Gulp',
      message: "Error: <%= error.message %>",
      sound: "Beep"
    })(err);
    this.emit('end');
  };
};
