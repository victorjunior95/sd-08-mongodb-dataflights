db.resumoVoos.insertOne({
  empresa: 'LATAM AIRLINES BRASIL',
  totalVoosDomesticos: 20026,
});

db.resumoVoos
  .find(
    { empresa: 'LATAM AIRLINES BRASIL' },
    { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
  )
  .limit(1);
