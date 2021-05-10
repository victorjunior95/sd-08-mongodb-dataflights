db.voos
  .find({ litrosCombustivel: { $exists: true } }, { _id: false, vooId: true })
  .limit(1);

// db.voos
//   .findOne({ litrosCombustivel: { $exists: true } }, { _id: false, vooId: true });
