const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps')
const color_rgba_fallback = require('postcss-color-rgba-fallback');
const opacity = require('postcss-opacity');
const pseudoelements = require('postcss-pseudoelements');
const vmin = require('postcss-vmin');
const pixrem = require('pixrem');
const will_change = require('postcss-will-change');

gulp.task('modify', () => {

      const processors = [
        will_change,
        autoprefixer,
        color_rgba_fallback,
        opacity,
        pseudoelements,
        vmin,
        pixrem
      ];

      return gulp.src('public/src/style.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('public/css'))
        })