db.voos
  .find(
    { "passageiros.pagos": { $gt: 700 } },
    { _id: 0, vooId: 1, mes: 1, ano: 1 },
  )
  .limit(1);
