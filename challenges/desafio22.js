db.voos.findOne({
  $and: [
    { $or: [
      { 'empresa.nome': 'DELTA AIRLINES' },
      { 'empresa.nome': 'AMERICAN AIRLIN S' },
    ] },
    { 'aeroportoOrigem.sigla': 'SBGR' },
    { 'aeroportoDestino.sigla': 'KJFK' },
  ],
}, { _id: 0, vooId: 1 });
