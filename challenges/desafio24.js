db.voos.findOne({ $and: [{ 
  litrosCombustivel: {
  $lte: 600,
  $exists: true },
  "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } }] }, {
  _id: false,
  vooId: true,
  "empresa.nome": true,
  litrosCombustivel: true });
