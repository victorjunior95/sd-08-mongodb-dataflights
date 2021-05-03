db.voos.findOne({
  $nor: [
    { litrosCombustivel: { $gt: 600 } },
    { "empresa.nome": "GOL" },
    { "empresa.nome": "AZUL" },
    { litrosCombustivel: { $exists: false } },
  ],
}, { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });
