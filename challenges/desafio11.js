db.voos.count(
  { "aeroportoDestino.nome": { $ne: "ESTADOS UNIDOS" } },
);
