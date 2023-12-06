const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
    {id: 1, nome: "Blush Kylie Janner", preco:"R$ 196,00", descricao: "Meu Kylie Cosmetics Blush em Pó Compacto oferece uma cor aveludada e duradoura, com cobertura construível. Disponível em 2 tons, a fórmula é luxuosamente suave e combina facilmente com todas as pele. Todas as minhas fórmulas Kylie Cosmetics Face são livres de crueldade.", imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw139a51a1/images/Color%20BR/KYLIE/blush/99350103304_KJC_BLUSH_21_Pink_Power_334_10g_0.35oz_Open_1500px.jpg?sw=556&sh=680&sm=fit"},
    {id: 2, nome: "Lip Gloss Kylie Janner", preco:"R$ 139,00", descricao: "Meu Kylie Cosmetics High Gloss oferece brilho multidimensional e desliza facilmente para deixar seus lábios com aparência luminosa e brilhante. Disponível em 10 tons, meu High Gloss suaviza os lábios, mantendo um acabamento espelhado com cor, sem qualquer viscosidade. Eu amo o quão confortável ele é nos meus lábios. Eu gosto de usar o produto sozinho, ou sobre um lábio matte para um acabamento brilhante. Esta fórmula é vegana* e livre de crueldade.", imagem: "https://copiar--marielletom.repl.co/lipgloss.jpg"},
    {id: 3, nome: "Espuma de lavar o rosto Kylie Janner", preco:"R$ 179,00", descricao: "A nossa Espuma de Limpeza Facial limpa suavemente, sem remover a umidade natural da pele. Formulada com glicerina e tensoativos à base de coco, esta espuma indulgente ajuda a remover a sujeira, a oleosidade e a maquiagem da pele, mantendo-a fresca e radiante.", imagem: "https://copiar--marielletom.repl.co/kylie1.jpg"},
    {id: 4, nome: "Creme Givanchy", preco:"R$ 369,00", descricao: "O Vitamin Blend Glow Serum, composto por 94% ingredientes de origem natural, une o ácido hialurônico e mais uma seleção de vitaminas – como a vitamina C pelo seu efeito antioxidante – para dar à pele uma luminosidade saudável.   O Sérum também garante 24 horas de hidratação contínua, até a camada mais profunda da epiderme, sendo a sua dose diária de vitaminas!   Desde a primeira aplicação, a pele fica luminosa, hidratada e visivelmente saudável. Com o uso ao longo do tempo, a tez torna-se mais uniforme e a textura da pele melhora. O Sérum é leitoso e a textura permeia a pele, fazendo-a aparentar imediatamente mais suave e nutrida.", imagem: "https://copiar--marielletom.repl.co/givanchy.png"},
    {id: 5, nome: "Paleta de Sombra Kylie Janner", preco:"R$ 369,00", descricao: "- 10 tonalidades altamente pigmentadas, incluindo tons neutros, frios, quentes e rosados.    - Possui dois acabamentos: matte e metálico multidimensional.    - Os tons se complementam facilitando a criação de looks versáteis.   - Texturas macias e aveludadas, que são fáceis de misturar, proporcionam alta pigmentação com uma só pincelada.   - Paleta compacta para levar com você aonde quer que você vá.    - Vegano*, Sem testes em animais, Sem Talco, Sem Glúten, Sem Fragrância.    *Formulado sem ingredientes de origem animal.", imagem: "https://copiar--marielletom.repl.co/paleta.jpg"},
    {id: 6, nome: "La vie est belle Lancôme", preco:"R$ 517,65", descricao: "La Vie Est Belle é um perfume buquê floral Gourmand da Lancôme, considerado a essência da felicidade. A fragrância é uma verdadeira declaração de alegria encapsulada em um sorriso de cristal.", imagem: "https://copiar--marielletom.repl.co/la-vie-est-belle.jpg"},
    {id: 7, nome: "Base Rare Beauty", preco:"R$ 229,00", descricao: "Base leve e hidratante que uniformiza a pele instantaneamente com uma cobertura iluminada, de leve a média, hidratando e protegendo-a do sol.", imagem: "https://copiar--marielletom.repl.co/base.jpg"},
    {id: 8, nome: "Fixador de maquiagem Mac", preco:"R$ 239,00", descricao: "Uma névoa leve de água cheia de vitaminas e minerais, infundida com uma mistura de chá verde, camomila e pepino para suavizar e refrescar a pele. Dá um impulso instantâneo de hidratação ao mesmo tempo em que proporciona um brilho suave para refrescar e finalizar a maquiagem. Este Santo Graal de névoas hidratantes pode ser usado com outros produtos de maneiras quase infinitas - para melhorar o uso da maquiagem ou hidratar e acalmar a pele cansada. Um toque delicioso em um aroma romântico permanente de rosa, um aroma calmante de lavanda ou um aroma cremoso de coco. A embalagem pode variar.", imagem: "https://copiar--marielletom.repl.co/fix.jpg"},
    {id: 9, nome: "Esfoliante corporal Sephora", preco:"R4 74,00", descricao: "O Esfoliante Corporal Sephora Collection Body Granita irá esfoliar suavemente sua pele deixando ela mais bonita, macia e delicadamente perfumada.  Floral: uma fragrância floral e doce, um devaneio de primavera em torno das flores de cerejeira.", imagem: "https://copiar--marielletom.repl.co/esfoliante.jpg"},
    {id: 10, nome: "Kit de pincel By Ariel", preco:"R$ 939,00", descricao: "Ariel's pencil with MORPHE  DEVELOPED, TESTED & PERFECTED BY ARIEL Celebrity makeup artist, Ariel, is known for his Signature Look: Stunning eyes, seamless blends, perfect lines, and face-defining highlights and contours. Using his expertise, Ariel meticulously developed, tested, and perfected this elite 12-piece face and eye set. So, as you bounce, pat, swipe, and blend, it’s as if Ariel, himself, is applying his Signature Look on you.    “Each brush is essential to my kit, which is why I named them after people, events, and memories that were essential in sculpting who I am today. I hope these brushes have as much of an impact on your life and artistry as they do on mine.”-Ariel", imagem: "https://copiar--marielletom.repl.co/PENCIL.JPG"}
]

function buscarProdutosID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto|| null
}

app.get('/produto', (req, res) => {
  res.render('produto', {message: 'Você está na pagina produtos!' });
});

app.get('/produto/:id', (req, res) => {
  const produtoEspecifico = buscarProdutosID(req.params.id);
  res.render('produto', {produtoEspecifico});
});

app.get('/', (req, res) => {
  res.render('index', {produtos});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});