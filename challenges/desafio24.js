db.voos.find({ $and: [
  { litrosCombustivel: { $not: { $lt: 600 } } },
  { litrosCombustivel: { $exists: true } },
  { "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } },
] },
{ vooId: 1, _id: 0, litrosCombustivel: 1, "empresa.nome": 1 }).limit(1);
