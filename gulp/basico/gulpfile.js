const gulp = require("gulp");

gulp.task("default", () => {
  gulp.start("copiar", "fim");
});

gulp.task("copiar", ["antes1", "antes2"], () => {
  //   gulp.src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
  //   gulp.src("pastaA/*.txt")
  gulp
    .src("pastaA/**/*.txt")
    // .pipe(transformacao1())
    // .pipe(transformacao2())
    .pipe(gulp.dest("pastaB"));
});

gulp.task("antes1", () => {
  console.log("antes1!!!");
});

gulp.task("antes2", () => {
  console.log("antes2!!!");
});

gulp.task("fim", ["fim1", "fim2"]);

gulp.task("fim1", () => {
  console.log("fim1!!!");
});

gulp.task("fim2", () => {
  console.log("fim2!!!");
});
