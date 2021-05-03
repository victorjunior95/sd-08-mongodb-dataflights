const company = 'LATAM AIRLINES BRASIL';

const totalVoos = db.voos.find(
  { 'empresa.nome': company,
    natureza: 'Doméstica' },
).count();

db.resumoVoos.insertOne({
  empresa: company,
  totalVoosDomesticos: totalVoos,
});

db.resumoVoos.find(
  { empresa: company },
  { _id: 0 },
);
