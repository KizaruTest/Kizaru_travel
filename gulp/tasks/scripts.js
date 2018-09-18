var gulp = require('gulp');
var webpack = require('webpack');

// Using gulp to automatically run the webpack.Make sure to add a callback function(ex: done()).
gulp.task('scripts', function(done) {
    // First,find the config file.
    webpack(require("../../webpack.config.js"), function(err, stats) {
        // handle err param and log it if err occurs.
        if (err) {
            console.log(err.toString());
        }
        // log the stats when webpack finished.
        console.log(stats.toString());
        done();
    });
});
