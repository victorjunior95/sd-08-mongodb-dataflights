db.resumoVoos.insertOne({ 
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }),
});

db.resumoVoos.find(
  { empresa: "PASSAREDO" }, 
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
  ).limit(1);