db.voos.findOne({ litrosCombustivel: { $lt: 1000 } },
  { vooId: 1, litrosCombustivel: 1, _id: 0 });
