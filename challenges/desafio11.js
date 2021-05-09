db.voos.count(
  { "aeroportoOrigem.nome": { $ne: "ESTADOS UNIDOS" } },
);
