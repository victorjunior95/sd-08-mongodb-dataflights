db.voos.find(
  {
    litrosCombustivel: { $exists: true, $gte: 1000 },
  },
  {
    vooId: 1,
    _id: 0,
  },
).limit(1);
