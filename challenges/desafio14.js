db.voos.count(
  { "aeroportoOrigem.pais": { $ne: "Brasil" } },
);
