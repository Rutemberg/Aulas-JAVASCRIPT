const bodyParse = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static(".")); // provê os conteudos estaticos (importante)
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./upload"); // pasta
  },
  filename: function(req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`); // nome do arquivo
  }
});

const upload = multer({ storage }).single("arquivo"); // nome do input a receber 

app.post("/upload", (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.end("Ocorreu um erro.");
    }

    res.end("Concluido com sucesso!");
  });
});

app.post("/formulario", (req, res) => {
    res.send({
      ...req.body,
      id: 7
    })
})

app.get("/parOuImpar", (req,res) => {
  // req.body
  // req.query
  // req.params
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
    resultado: par ? "par" : "impar"
  })
})

app.listen(8081, () => console.log("Executando..."));
