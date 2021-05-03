db.voos.find({
  vooId: 756807,
},
{
  id: -1,
  'empresa.sigla': 1,
  'empresa.nome': 1,
  passageiros: 1,
});
