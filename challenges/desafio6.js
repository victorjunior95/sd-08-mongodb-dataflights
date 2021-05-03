db.voos
  .find(
    { vooId: 756807 },
    { _id: 0, vooId: 1, 'empresa.sigla': 1, 'empresa.nome': 1, passageiros: 1 },
  )
  .limit(3)
  .skip(9);
