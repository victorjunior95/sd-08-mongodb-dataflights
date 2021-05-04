db.voos.findOne(
  { litrosCombustivel: { $not: { $gte: 1000 }, $exists: true } },
  { _id: 0, vooId: 1, litroCombustivel: 1 },
);
