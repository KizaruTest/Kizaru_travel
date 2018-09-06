var gulp = require('gulp');
var browserSync = require('browser-sync').create(); 

gulp.task('reload', function(done) {
    browserSync.reload();
    done();
});

gulp.task('watch', function(done) {
 
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    // gulp.start?

    /*    gulp.watch('./app/index.html', gulp.parallel(function() {
     *       browserSync.reload();
     *   }));
     *   done();
     */

    gulp.watch(['./app/assets/styles/**/*.css', './app/index.html'], gulp.series('style', 'cssJect', 'reload'));
    done();
});

gulp.task('cssJect', function() {
    return gulp.src('./app/temp/styles/style.css')
      .pipe(browserSync.stream());
});
