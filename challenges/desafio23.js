db.voos.find({ $and: [
  { litrosCombustivel: { $not: { $gt: 1000 } } },
  { litrosCombustivel: { $exists: true } },
] },
{ vooId: 1, _id: 0, litrosCombustivel: 1 }).limit(1);
