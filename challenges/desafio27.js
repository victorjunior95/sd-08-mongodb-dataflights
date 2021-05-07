db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.find({ "empresa.nome": "PASSAREDO" }).count(),
});

db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });