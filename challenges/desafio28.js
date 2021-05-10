const domesticLatamAirlinesFlights = db.voos.count({
  'empresa.nome': 'LATAM AIRLINES BRASIL',
  natureza: 'Doméstica',
});

db.resumoVoos.insertOne({
  empresa: 'LATAM AIRLINES BRASIL',
  totalVoosDomesticos: domesticLatamAirlinesFlights,
});

db.resumoVoos.find(
  { empresa: 'LATAM AIRLINES BRASIL' },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
