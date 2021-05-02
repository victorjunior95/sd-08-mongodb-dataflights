const totalVoosDomesticos = db.voos.count(
  {
    'empresa.nome': 'PASSAREDO',
    natureza: 'Doméstica',
  },
);

db.resumoVoos.insertOne({
  empresa: 'PASSAREDO',
  totalVoosDomesticos,
});

db.resumoVoos.find(
  {
    empresa: 'PASSAREDO',
  },
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0,
  },
).limit(1);
