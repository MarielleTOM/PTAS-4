const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/produtinho', (req, res) => {
  res.render('produtinho', { message: 'Deseja esse produtinho?' });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Bem vindo a pagina produtos!' });
});

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});