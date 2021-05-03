db.voos.find({
  $or: [{ "empresa.nome": "DELTA AIRLINES" },
  { "empresa.nome": "AMERICAN AIRLINES" }, { $and: [{
    "aeroportoOrigem.nome": "SBGR" },
    { "aeroportoDestino.nome": "KJFK" }] }] }).limit(1);
