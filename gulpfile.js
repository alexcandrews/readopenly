var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var webpack = require('webpack-stream');

// Build website
gulp.task('webpack', function () {
    return gulp.src('./app/components/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./public/'));
});

// Deploy built website to gh-pages
gulp.task('deploy', function () {
    return gulp.src('./public/**/*')
        .pipe(ghPages({
            message: "Update gh-pages website"
        }));
});

// git commit task with gulp prompt
//gulp.task('commit', function(){
//    // just source anything here - we just wan't to call the prompt for now
//    gulp.src('package.json')
//        .pipe(prompt.prompt({
//            type: 'input',
//            name: 'commit',
//            message: 'Please enter commit message...'
//        },  function(res){
//            // now add all files that should be committed
//            // but make sure to exclude the .gitignored ones, since gulp-git tries to commit them, too
//            return gulp.src([ '!node_modules/', './*' ], {buffer:false})
//                .pipe(git.commit(res.commit));
//        }));
//});

gulp.task('default', ['webpack']);
