db.voos.find({
  $and: [
    { $or: [{ "empresa.nome": { $in: ["DELTA AIRLINESS", "AMERICAN AIRLINES"] } }] },
    { "aeroportoDestino.sigla": "KJFK" },
    { "aeroportoOrigem.sigla": "SBGR" },
  ],
}, { _id: 0, vooId: 1 }).limit(1);
