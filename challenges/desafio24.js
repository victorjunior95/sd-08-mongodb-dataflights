db.voos.findOne({ $and:
  [{ litrosCombustivel: { $lt: 600 } },
  { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  { litrosCombustivel: { $exists: true } },
] },
  { vooId: 1, litrosCombustivel: 1, _id: 0, "empresa.nome": 1 });