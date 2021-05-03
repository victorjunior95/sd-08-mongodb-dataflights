db.voos.findOne({
  $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $not: { $gt: 600 } } },
    { $nor: [
      { "empresa.nome": "GOL" },
      { "empresa.nome": "AZUL" }] }] }, {
      _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });
