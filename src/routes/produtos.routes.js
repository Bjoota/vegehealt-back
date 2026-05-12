import { Router } from "express";
import produtos from "../data/produtos.json" with { type: "json" };

const router = Router();

router.get("/", (req, res) => {
  res.json(produtos);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) return res.status(404).json({ message: "Produto não encontrado" });
  res.json(produto);
});

export default router;