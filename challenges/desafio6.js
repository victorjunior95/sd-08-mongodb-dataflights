db.voos.find(
  { _id: 0, vooId: 756807 },
  { "empresa.sigla": 1, "empresa.nome": 1, passageiros: 1 },
  );