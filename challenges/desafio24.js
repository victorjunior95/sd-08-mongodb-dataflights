db.voos.findOne({
  $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lte: 600 } },
    { "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } },
    ],
}, {
  _id: 0,
  vooId: 1,
  "empresa.nome": 1,
  litrosCombustivel: 1,
});
