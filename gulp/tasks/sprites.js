var gulp = require('gulp');
var sprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg', 
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }

}

gulp.task('delete', function() {
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
});


gulp.task('makeSprite', function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
      .pipe(sprite(config))
      .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteCSS', function() {
    return gulp.src('./app/temp/sprite/css/*.css')
      .pipe(rename('_sprite.css'))
      .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('copySpriteGraphic', function() {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
      .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('endClean', function() {
    return del('./app/temp/sprite');
});

gulp.task('icon', gulp.series('delete', 'makeSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean'));