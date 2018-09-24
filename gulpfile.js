const gulp      = require("gulp");
var concat    = require("gulp-concat");
const uglify    = require("gulp-uglify");
const cleanCss  = require("gulp-clean-css");
const imagemin  = require("gulp-imagemin");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

/*Flytta HTML*/
gulp.task("copyhtml", function() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("pub/"));
});

/* Sass conversion till CSS */
gulp.task("scss", function(){
    return gulp.src("src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("pub/css"));
});

/* Minify CSS */
gulp.task("cleanCss", function() {
    return gulp.src("src/css/*.css")
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe( concat("main.min.css"))
        .pipe(gulp.dest("pub/css"));
});

/* Slå ihop och minifiera Javascriptfiler */
gulp.task("concatminifyjs", function() {
    return gulp.src("src/js/*.js")
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("pub/js"));
});

/* Minifiera och flytta bildfiler */

gulp.task("imagemin", function () {
    gulp.src("src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest('pub/images'));
});

/* Check for updates among the files */
gulp.task("watcher", function(){
    gulp.watch("src/*html", ['copyhtml']);
    gulp.watch("src/scss/*.scss", ['scss']);
    gulp.watch("src/css/*.css", ['cleanCss']);
    gulp.watch("src/js/*.js", ['concatminifyjs']);
    gulp.watch("src/images/*", ['imagemin']);
});

gulp.task("default", ["copyhtml", "scss", "cleanCss", "concatminifyjs", "imagemin", "watcher"]);