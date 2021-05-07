const empresaNome = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos.count({ $and: [
    { "empresa.nome": empresaNome },
    { natureza: "Doméstica" },
  ] }),
});

db.resumoVoos.find(
  { empresa: empresaNome }, 
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
).limit(1);
