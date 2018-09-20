const gulp      = require("gulp");
var concat    = require("gulp-concat");
const uglify    = require("gulp-uglify");
const cleanCss  = require("gulp-clean-css");

/*Flytta HTML*/
gulp.task("copyhtml", function() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("pub/"));
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

/* Check for updates among the files */
gulp.task("watcher", function(){
    gulp.watch("src/*html", ['copyhtml']);
    gulp.watch("src/css/*.css", ['cleanCss']);
    gulp.watch("src/js/*.js", ['concatminifyjs']);
});

gulp.task("default", ["copyhtml", "cleanCss", "concatminifyjs", "watcher"]);