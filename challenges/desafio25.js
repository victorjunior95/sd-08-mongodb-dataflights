db.voos.deleteMany(
  { $and: [{ litrosCombustivel: { $lt: 400 } },
  { litrosCombustivel: { $exists: true } },
  { "empresa.nome": { $in: ["AZUL"] } }] },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
  );
