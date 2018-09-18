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

    // Using gulp's watch module to watch multiple files when edited,I use series module to run the tasks sequently.
    gulp.watch(['./app/assets/styles/**/*.css', './app/index.html', './app/assets/scripts/**/*.js'], 
    gulp.series('style', 'cssJect', 'scripts', 'reload'));
    done();
});

gulp.task('cssJect', function() {
    return gulp.src('./app/temp/styles/style.css')
      .pipe(browserSync.stream());
});

