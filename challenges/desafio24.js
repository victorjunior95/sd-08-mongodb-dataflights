db.voos.find({ $and: [{ litrosCombustivel: { $lte: 600 } }, 
{ $or: [{ "empresa.nome": { $ne: "GOL" } },
{ "empresa.nome": { $ne: "AZUL" } }],
}] }, 
  { vooId: 1, litrosCombustivel: 1, _id: 0, "empresa.nome": 1 }).limit(1);
