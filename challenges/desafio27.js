db.voos.count(
  { 
    natureza: "Doméstica",
    "empresa.nome": "PASSAREDO",
  },
);

db.resumoVoos.insertOne(
  { empresa: "PASSAREDO", totalVoosDomesticos: 4187 },
);

db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  { _id: 0 },
);
