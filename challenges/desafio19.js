db.voos.find(
  { litrosCombustivel: { $exists: true } },
  { vooId: 1, _id: 0 },
).sort({ ano: 1 }).limit(1);
