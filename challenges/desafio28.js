db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": "LATAM AIRLINES BRASIL",
    natureza: "Doméstica",
  }),
});
db.resumoVoos.findOne({}, { _id: 0 });
