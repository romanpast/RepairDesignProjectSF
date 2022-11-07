const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps')
const color_rgba_fallback = require('postcss-color-rgba-fallback');
const opacity = require('postcss-opacity');
const pseudoelements = require('postcss-pseudoelements');
const vmin = require('postcss-vmin');
const postcssPresetEnv = require('postcss-preset-env');

gulp.task('modify', () => {

      const processors = [
        autoprefixer,
        pseudoelements,
        vmin,
        postcssPresetEnv
      ];

      return gulp.src('public/src/style.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('public/css'))
        })