db.voos.findOne({ litrosCombustivel: { $exists: true } }, {
  vooId: true });
