const selectQuantity = db.voos.find({ 'empresa.nome': 'PASSAREDO', natureza: 'Doméstica' }).count();
db.resumoVoos.insertOne(
  { empresa: 'PASSAREDO',
  totalVoosDomesticos: selectQuantity,
},
);

db.resumoVoos.find({ empresa: 'PASSAREDO' }, { _id: 0 });
