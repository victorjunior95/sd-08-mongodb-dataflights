db.voos.findOne(
  {
    $or: [{ 'empresa.nome': { $in: ['DELTA AIRLINES', 'AMERICAN AIRLINES'] } }],
    'aeroportoOrigem.sigla': { $eq: 'SBGR' },
    'aeroportoDestino.sigla': { $eq: 'KJFK' },
  },
  { _id: 0, vooId: 1 },
);
