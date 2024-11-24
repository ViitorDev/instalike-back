import conectarAoBanco from "../config/dbconfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// A variável conexao armazena o objeto de conexão com o banco de dados,
// estabelecido através da função conectarAoBanco e utilizando a string de conexão
// obtida da variável de ambiente STRING_CONEXAO.

export  default async function getTodosPosts() {
  // Esta função assíncrona é responsável por buscar todos os posts do banco de dados.

  const db = conexao.db("imersao-instabytes");

  // Seleciona o banco de dados "imersao-instabytes" dentro da conexão estabelecida.

  const colecao = db.collection("posts");

  // Seleciona a coleção "posts" dentro do banco de dados.

  return colecao.find().toArray();

  // Executa a operação de busca em todos os documentos da coleção "posts" e retorna um array
  // com os resultados da busca.
}
