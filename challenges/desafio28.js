const totalVoos = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": "LATAM AIRLINES BRASIL",
});

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: totalVoos,
});

db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
