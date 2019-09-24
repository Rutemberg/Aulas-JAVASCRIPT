const express = require("express");
const app = express();

const saudacao = require("./saudacaoMID");
const usuarioApi = require("./api/usuario");
const produtoApi = require("./api/produto");
produtoApi(app, "com param!");

app.post("/usuario", usuarioApi.salvar);
app.get("/usuario", usuarioApi.obter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(saudacao("Joao"));

app.use("/inicio", (req, res, next) => {
  console.log("Antes... ");
  next();
});

app.get("/cliente/relatorio", (req, res) => {
  res.send(
    `Cliente relatorio: completo ${req.query.completo} ano = ${req.query.ano}`
  );
});

app.post("/corpo", (req, res) => {
  // let corpo = "";
  // req.on("data", function(parte) {
  //     corpo += parte
  // })

  // req.on("end", () => {
  //     res.send(corpo)
  // })

  res.send(req.body);
});

app.get("/cliente/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get("/inicio", (req, resp, next) => {
  console.log("Durante... ");

  resp.json([
    {
      data: [
        { id: 78, name: "Ana", position: 1 },
        { id: 58, name: "Marcos", position: 2 },
        { id: 10, name: "Clovis", position: 3 }
      ],
      count: 30,
      skip: 0,
      limit: 3,
      status: 200
    }
  ]);

  // resp.json({
  //     name: "iPod",
  //     value: 1899,
  //     discount: 0.12
  // })

  // resp.send("Estou Bem...")

  next();
});

app.use("/inicio", (req, res) => {
  console.log("Depois... ");
});

app.listen(3000, () => {
  console.log("Back end executando...");
});
