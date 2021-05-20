db.voos.findOne({ $and: [
{ litrosCombustivel: { $not: { $gt: 600 } } },
{ "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } },
{ litrosCombustivel: { $exists: true } },
] },
{ _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });
