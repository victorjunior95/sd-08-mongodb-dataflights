const enterprise = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: enterprise,
  totalVoosDomesticos: db.voos
    .find({
      "empresa.nome": enterprise,
      natureza: "Doméstica",
    })
    .count(),
});

db.resumoVoos.findOne(
  { empresa: enterprise },
  { empresa: true, totalVoosDomesticos: true, _id: false },
);
