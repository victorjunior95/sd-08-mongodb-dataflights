const companyName = 'LATAM AIRLINES BRASIL';
const quantidadeVoos = db.voos.count({
  'empresa.nome': companyName,
  natureza: 'Doméstica',
});
db.resumoVoos.insertOne({
  empresa: companyName,
  totalVoosDomesticos: quantidadeVoos,
});
db.resumoVoos.findOne(
  { empresa: companyName },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
