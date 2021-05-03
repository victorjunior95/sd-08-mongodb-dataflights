db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $lt: 600 } },
      { "empresa.nome": { $ne: "GOL" } },
      { "empresa.nome": { $ne: "AZUL" } },
    ],
  },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
);
