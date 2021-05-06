db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lt: 600 } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  ],
},
{ _id: 0, "empresa.nome": 1, litrosCombustivel: 1 });