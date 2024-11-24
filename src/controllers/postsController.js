
export async function listarPosts(req, res)  {
  // chama a função para buscar os posts
  const posts =  await getTodosPosts();
  // envia uma resposta HTTP com status 200 (ok) e os posts no formato JSON
  res.status(200).json(posts);
} 
  
  
