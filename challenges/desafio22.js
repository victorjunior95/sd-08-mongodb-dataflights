db.voos.find(
  {  
  $or: 
  [
    { "empresa.nome": { $eq: "DELTA AIRLINES" } },
    { "empresa.nome": { $eq: "AMERICAN AIRLINES" } },
  ],
  $and: 
  [
    { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
    { "aeroportoDestino.sigla": { $eq: "KJFK" } },
  ],
  },
  { _id: 0, vooId: 1 },
).limit(1);
