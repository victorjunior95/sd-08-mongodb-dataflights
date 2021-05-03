const empresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: db.voos
    .count({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" }),
});
db.resumoVoos.find(
  { empresa },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);