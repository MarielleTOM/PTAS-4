const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Você quer esse produtinho?!' });
});

app.get('/', (req, res) => {
  res.render('index', { message: 'Você está na pagina produtos!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});