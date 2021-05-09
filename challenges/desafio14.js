db.voos.count(
  { "aeroportoOrigem.nome": { $ne: "Brasil" } },
);
