const gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var postcss = require('gulp-postcss');
var clean = require('gulp-clean');

var calc = require("postcss-calc");
var presetEnv = require('postcss-preset-env');
var nodesass = require('postcss-node-sass');
var cssnano = require('cssnano');

function build() {
    return gulp.src('sass/index-sass.scss')
        .pipe(
            postcss([
                nodesass(),
                calc(),
                presetEnv({
                    browsers: 'chrome >= 45'
                })
            ])
        )
        .pipe(rename(function(path) {
            path.extname = ".css"
        }))
        .pipe(gulp.dest('dist'))
}

gulp.task('clean', function () {
    gulp.src('dist').pipe(clean())
});

gulp.task('build:css', function () {
    build();
});

gulp.task('build:cssmin', function () {
    build()
        .pipe(sourcemaps.init())
        .pipe(rename(function(path) {
            path.basename += ".min"
        }))
        .pipe(
            postcss([cssnano()])
        )
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean', 'build:cssmin']);

gulp.task('watch', function () {
    gulp.run('build:css');

    gulp.watch('sass/**.scss', function() {
        gulp.run('build:css');
    })
});

gulp.task('default', ['build']);
