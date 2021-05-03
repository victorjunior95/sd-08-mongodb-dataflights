const totalVoos = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": "PASSAREDO",
});

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: totalVoos,
});

db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
