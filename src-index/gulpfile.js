var gulp = require('gulp'),
  // HTML
  jade = require('gulp-jade'),
  htmlmin = require('gulp-minify-html'),
  // CSS
  stylus = require('gulp-stylus'),
  nib = require('nib'),
  queries = require('gulp-combine-media-queries'),
  // Images
  cssmin = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin'),
  newer = require('gulp-newer'),
  // Live reload
  livereload = require('gulp-livereload');

// Output directory
var output = "../";


gulp.task('jade', function() {
  gulp.src('./src/jade/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(output))
    .pipe(livereload());
});

gulp.task('stylus', function() {
  gulp.src('./src/stylus/main.styl')
    .pipe(stylus({
      use: nib()
    }))
    .pipe(gulp.dest(output + 'css/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload();
  gulp.watch('./src/stylus/**/**.*', ['stylus']);
  gulp.watch('./src/jade/**/**.*', ['jade']);
});

gulp.task('default', ['jade', 'stylus']);
