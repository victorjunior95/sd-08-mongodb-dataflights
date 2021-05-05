db.voos.find({ $and: [
  { litrosCombustivel: { $exists: true } },
  { litrosCombustivel: { $gte: 1000 } },
] }, { vooId: 1, _id: 0 }).sort({ ano: 1 }).limit(1);
