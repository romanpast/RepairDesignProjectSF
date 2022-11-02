const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer-core');
const sourcemaps = require('gulp-sourcemaps')


gulp.task('modify', () => {    
    
        return gulp.src('public/src/style.css')
          .pipe(sourcemaps.init())
          .pipe(postcss([autoprefixer]))
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('public/css'))
      })