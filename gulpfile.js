var gulp = require('gulp');
var webpack = require('webpack-stream');
var shell = require('gulp-shell')

// Build website
gulp.task('webpack', function () {
    return gulp.src('./app/components/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./public/'));
});

gulp.task('deploy', shell.task([
    'rsync -ahuvPEL . aws:~/readopenly --exclude-from=.gitignore'
]));

gulp.task('default', ['webpack']);
