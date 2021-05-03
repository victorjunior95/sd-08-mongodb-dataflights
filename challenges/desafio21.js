db.voos.find(
  { litrosCombustivel: { $gt: 1000 } },
  { vooId: 1}
).limit(1);
