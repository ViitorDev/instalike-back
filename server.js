import express from "express";

const posts = [
  {
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    descricao: "Gato fofo dormindo",
    imagem: "https://placekitten.com/400/200"
  },
  {
    descricao: "Paisagem incrível",
    imagem: "https://source.unsplash.com/random"
  },
  {
    descricao: "Cachorro brincando no parque",
    imagem: "https://picsum.photos/id/237/300/200"
  },
  {
    descricao: "Comida deliciosa",
    imagem: "https://unsplash.com/photos/QvJywcCIFfo"
  },
  {
    descricao: "Bebê sorrindo",
    imagem: "https://randomuser.me/api/portraits/women/75.jpg"
  }
];

const app = express();
app.use(express.json()); // tude que der pra ser json , sera transformado em json 

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
  };
  res.status(200).send(livro);
  */

  // opção 2
  res.status(200).send({
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    genero: "Fantasia"
  });
});

app.get("/posts", (req, res) => {
  res.status(200).send();
});