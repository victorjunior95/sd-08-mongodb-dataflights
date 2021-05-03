db.voos.find({ $and: [
  { litrosCombustivel: { $not: { $gt: 600 } } },
  { litrosCombustivel: { $exists: true } },
  { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
] },
{ vooId: 1, _id: 0, litrosCombustivel: 1, "empresa.nome": 1 }).limit(1);
