db.voos.find({ 
  $and: [
    { litrosCombustivel: { $exists: true, $not: { $gt: 600 } } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  ] }, { vooId: 1, _id: 0, "empresa.nome": 1, litrosCombustivel: 1 }).limit(1);