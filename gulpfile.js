var gulp = require('gulp');
//var bg = require("gulp-bg");
var ghPages = require('gulp-gh-pages');
var webpack = require('webpack-stream');

//gulp.task("server", bg("node", "server.js"));

gulp.task('webpack', function () {
    return gulp.src('./app/components/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('public/'));
});

gulp.task('deploy', function () {
    return gulp.src('./public/**/*')
        .pipe(ghPages());
});

gulp.task('default', ['webpack']);
