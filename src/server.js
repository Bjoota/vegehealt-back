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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));