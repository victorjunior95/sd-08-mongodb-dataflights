db.voos.find(
  { $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lt: 600 } },
    { $nor: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }] },
  ] },
  { vooId: 1, "empresa.nome": 1, _id: 0, litrosCombustivel: 1 },
).sort({ ano: 1 }).limit(1);
