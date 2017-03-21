var gulp = require('gulp');




gulp.task('default',function () {
    console.log("default task");
});

var browserSync = require('browser-sync');
var reload = browserSync.reload;
    gulp.task('serve' , function () {
    browserSync({
        server:{
            baseDir:'client'
        }
    });

    gulp.watch(
        ['static/output/**/*.js','view/index.html'],
        {
            cwd: 'client',
        },
        reload
    );
});

