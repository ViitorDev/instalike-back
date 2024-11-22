import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("servidor escutando...");
});

app.get("/api", (req, res) => {
  res.status(200).send("Boas vindas à imersâo!");
});


// exercicio
app.get("/livro", (req, res) => {

  // opção 1
  /*const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    genero: "Fantasia"
  }
  res.status(200).send(livro)
  */

  // opção 2
  res.status(200).send({
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    genero: "Fantasia"
  })
})