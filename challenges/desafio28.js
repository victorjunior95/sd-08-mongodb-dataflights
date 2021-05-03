const company = 'LATAM AIRLINES BRASIL';
db.resumoVoos.insertOne({
  empresa: company,
  totalVoosDomesticos: db.voos.count({
    'empresa.nome': company,
    natureza: 'Doméstica',
  }),
});
db.resumoVoos.findOne(
  {
    empresa: company,
  },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
);
