db.voos.find({
  $or: [{ $not: { "aeroportoDestino.continente": "EUROPA" } },
  { $not: { "aeroportoDestino.continente": "ÁSIA" } },
  { $not: { "aeroportoDestino.continente": "OCEANIA" } }] }).count();
