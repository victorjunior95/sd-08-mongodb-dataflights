db.voos.findOne(
  { 
    litrosCombustivel: { $lt: 600, $exists: true },
    $or: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }],
  },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
);
