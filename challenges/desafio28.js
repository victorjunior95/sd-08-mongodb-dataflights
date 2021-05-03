const EMPRESA = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: EMPRESA,
  totalVoosDomesticos: db.voos.find({
    "empresa.nome": EMPRESA,
    natureza: "Doméstica",
  }).count(),
});

db.resumoVoos.find({ empresa: EMPRESA }, { _id: 0 });
