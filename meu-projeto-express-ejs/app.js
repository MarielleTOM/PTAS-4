const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
    {id: 1, nome: "Blush", preco:"R$ 196,00", descricao: "Kylie Janner Cor:Witer Pink", imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw139a51a1/images/Color%20BR/KYLIE/blush/99350103304_KJC_BLUSH_21_Pink_Power_334_10g_0.35oz_Open_1500px.jpg?sw=556&sh=680&sm=fit"},
    {id: 2, nome: "Lip Gloss", preco:"", descricao: "", imagem: "https://copiar--marielletom.repl.co/lipgloss.jpg"},
    {id: 3, nome: "Espuma de lavar o rosto", preco:"", descricao: "", imagem: "https://copiar--marielletom.repl.co/kylie1.jpg"},
    {id: 4, nome: "Creme Givanchy", preco:"", descricao: "", imagem: "https://copiar--marielletom.repl.co/givanchy.png"},
    {id: 5, nome: "", preco:"", descricao: "", imagem: ""},
    {id: 6, nome: "", preco:"", descricao: "", imagem: ""},
    {id: 7, nome: "", preco:"", descricao: "", imagem: ""},
    {id: 8, nome: "", preco:"", descricao: "", imagem: ""},
    {id: 9, nome: "", preco:"", descricao: "", imagem: ""},
    {id: 10, nome: "", preco:"", descricao: "", imagem: ""}
]

function buscarProdutosID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto|| null
}

app.get('/produto', (req, res) => {
  res.render('produto', {message: 'Você está na pagina produtos!' });
});

app.get('/', (req, res) => {
  res.render('index', {produtos});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});