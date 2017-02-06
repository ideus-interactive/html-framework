'use strict';

module.exports = function (gulp, $, CONFIG) {
  /**
   * DEV
   */
  gulp.task('sprite:dev', function () {
    const spriteData = gulp.src(CONFIG.PATH.SRC.SPRITE).pipe($.spritesmith({
      imgName  : 'sprite.png',
      imgPath  : '../img/sprite.png',
      cssName  : '_sprite.scss',
      cssFormat: 'scss'
    }));

    const imgStream = spriteData.img.pipe(gulp.dest(CONFIG.PATH.DIST.IMG));
    const cssStream = spriteData.css.pipe(gulp.dest(CONFIG.PATH.SRC.STYLES.SPRITE));

    return $.merge(imgStream, cssStream);
  });
  /**
   * PROD
   */
  gulp.task('sprite:prod', function () {
    const spriteData = gulp.src(CONFIG.PATH.SRC.SPRITE).pipe($.spritesmith({
      imgName  : 'sprite.png',
      imgPath  : '../img/sprite.png',
      cssName  : '_sprite.scss',
      cssFormat: 'scss'
    }));

    const imgStream = spriteData.img.pipe(gulp.dest(CONFIG.PATH.DIST.IMG));
    const cssStream = spriteData.css.pipe(gulp.dest(CONFIG.PATH.SRC.STYLES.SPRITE));

    return $.merge(imgStream, cssStream);
  });
};
