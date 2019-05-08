const gulp = require("gulp")
const sass = require("gulp-sass")
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

gulp.task("default", ["copiarHTML"],  () => {
     gulp.src("src/sass/index.scss") //pega o arquivo scss
     .pipe(sass().on("error", sass.logError)) // se houver erro 
     .pipe(uglifycss({"uglyComments": true})) // comprimir css o max possivel
     .pipe(concat("estilo.min.css")) // concatenas os arquivos criando um unico arquivo
     .pipe(gulp.dest("build/css")) // destino
})

gulp.task("copiarHTML", () => {
    gulp.src("src/index.html")
    .pipe(gulp.dest("build"))
})