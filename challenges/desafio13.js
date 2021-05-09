db.voos.count(
  {
    $or: [
      { "aeroportoDestino.continente": { $ne: "EUROPA" } },
      { "aeroportoDestino.continente": { $ne: "ÁSIA" } },
      { "aeroportoDestino.continente": { $ne: "OCEANIA" } },
    ],
  },
);
