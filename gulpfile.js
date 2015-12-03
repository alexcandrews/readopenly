var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var webpack = require('gulp-webpack');

gulp.task('dist', function() {
  return gulp.src('./app/components/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    // .pipe(webpack())
    .pipe(gulp.dest('public/'));
});

gulp.task('deploy', ['dist'], function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
});
