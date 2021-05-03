db.resumoVoos.insertOne({
  empresa: "PASSARERO",
  totalVoosDomesticos: db.voos.find({ "empresa.nome": "PASSARERO", natureza: "Doméstica" }).count(),
});
db.resumoVoos.findOne({ empresa: "PASSARERO" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
