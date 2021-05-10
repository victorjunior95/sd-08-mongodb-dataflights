db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $not: { $gt: 600 } } },
      { litrosCombustivel: { $exists: true } },
      { "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } },
    ],
  },
  { _id: 0, vooId: 1, litrosCombustivel: 1, "empresa.nome": 1 },
);
