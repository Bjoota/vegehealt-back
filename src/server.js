import express from "express";
import cors from "cors";
import produtosRouter from "./routes/produtos.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/produtos", produtosRouter);

app.post("/checkout", (req, res) => {
  const { itens, cliente } = req.body || {};

  if (!Array.isArray(itens) || itens.length === 0) {
    return res.status(400).json({ message: "Carrinho vazio" });
  }

  // Simulação de pedido
  const pedidoId = Math.floor(Math.random() * 90000) + 10000;

  res.status(201).json({
    message: "Pedido recebido com sucesso!",
    pedidoId,
    itens,
    cliente: cliente || null
  });
});

// Rota raiz exigida no requisito 2.2
app.get('/', (req, res) => {
  res.json({ message: "API Vegehealt está online!" });
});

// Rota /v1 com data e hora formatadas
app.get('/v1', (req, res) => {
  // Pega a data e hora atual no fuso horário de Brasília
  const dataAtual = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  
  res.json({
    message: "Api v1 respondendo no container docker...",
    chamada_em: dataAtual
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));

