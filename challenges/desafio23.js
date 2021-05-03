db.voos.find({ $and: [
  { litrosCombustivel: { $exists: true } },
  { litrosCombustivel: { $lt: 1000 } },
] }, { vooId: 1, _id: 0, litrosCombustivel: 1 }).sort({ ano: 1 }).limit(1);
