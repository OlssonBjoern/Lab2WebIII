## README - Fil för Laboraton 3.1 i Webbutveckling III vid Mittuniversitetet
### Av: Björn Olsson, 2018-09-17
---

### SASS

Syftet med uppgiften är att lägga in funktionalitet som konverterar SASS-filer till CSS-kod. Detta görs med koden:  

---

gulp.task("scss", function(){
    return gulp.src("src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("pub/css"));
});

---

Detta tillsammans med den kod som lagts in i watchern omvandlar korrekt.

---