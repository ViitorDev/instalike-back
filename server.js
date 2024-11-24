import express from "express";
import routes from "./src/routes/postsRoutes.js";


// Esta linha importa o módulo Express, que é o framework web utilizado para criar a aplicação.
// O módulo conectarAoBanco contém a função que estabelece a conexão com o banco de dados.


const app = express();

// Cria uma instância do Express, que será o núcleo da nossa aplicação.

routes(app)

app.listen(3000, () => {
    console.log("servidor escutando...");
});

// Inicia o servidor Express na porta 3000 e exibe uma mensagem no console
// indicando que o servidor está ouvindo por requisições.






























/*
app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersâo!");
});
*/
// Define uma rota GET para o caminho "/api". Quando uma requisição GET
// for feita para este caminho, o servidor enviará uma resposta com status 200
// e o corpo da mensagem "Boas vindas à imersâo!".


/*
function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id == Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id)
  res.status(200).json(posts[index]);
});
*/
// exercicio aula 02 

/* dps faço rs
// exercicio aula 01
app.get("/livro", (req, res) => {

  // opção 1
  const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    genero: "Fantasia"
  };
  res.status(200).send(livro);
 

  // opção 2
  res.status(200).send({
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    genero: "Fantasia"
  });
});
*/