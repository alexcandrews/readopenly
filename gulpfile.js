var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var webpack = require('webpack-stream');

gulp.task('compile', function() {
  return gulp.src('./app/components/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    // .pipe(webpack())
    .pipe(gulp.dest('public/'));
});

gulp.task('deploy', ['compile'], function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['compile']);
