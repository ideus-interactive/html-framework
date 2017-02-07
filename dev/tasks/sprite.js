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
  /**
   * SVG SPRITE DEV
   */
  gulp.task('sprite_svg:dev', function () {
    return gulp.src(CONFIG.PATH.SRC.SPRITE_SVG)
      .pipe($.svgSprites({
        cssFile: '../../dev/src/sass/_sprite_svg.scss',
        svgPath: '../img/svg/sprite.svg',
        common: 'svg-sprite',
        selector: 'svg-%f',
        preview: {
          sprite: null
        }
      }))
      .pipe(gulp.dest(CONFIG.PATH.DIST.IMG));
  });
  /**
   * SVG SPRITE PROD
   */
  gulp.task('sprite_svg:prod', function () {
    return gulp.src(CONFIG.PATH.SRC.SPRITE_SVG)
      .pipe($.svgSprites({
        cssFile: '../../dev/src/sass/_sprite_svg.scss',
        svgPath: '../img/svg/sprite.svg',
        common: 'svg-sprite',
        selector: 'svg-%f',
        preview: {
          sprite: null
        }
      }))
      .pipe(gulp.dest(CONFIG.PATH.DIST.IMG));
  });
};
