db.voos.find(
  { litrosCombustivel: { $exists: true, $not: { $gt: 1000 } } },
  { vooId: 1, _id: 0, litrosCombustivel: 1 },
).limit(1);