const bodyParse = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static(".")); // provê os conteudos estaticos (importante)
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.listen(8080, () => console.log("Executando..."));
