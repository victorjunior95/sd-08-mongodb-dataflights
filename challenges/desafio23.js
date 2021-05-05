db.voos.findOne({
  $nor: [{ litrosCombustivel: { $gt: 1000 } }],
  litrosCombustivel: { $exists: true } },
  { _id: 0, vooId: 1, litrosCombustivel: 1 });
