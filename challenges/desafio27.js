const documento = {
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.find({
    $and: [
      { "empresa.nome": "PASSAREDO" },
      { natureza: "Doméstica" },
    ],
    }).count(),
};

db.resumoVoos.insertOne(documento);

db.resumoVoos.find({
  empresa: "PASSAREDO",
}, {
  _id: 0,
  empresa: 1,
  totalVoosDomesticos: 1,
}).limit(1);