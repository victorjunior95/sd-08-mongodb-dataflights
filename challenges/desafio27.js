db.resumoVoos.insertOne(
  { empresa: "PASSAREDO", 
    totalVoosDomesticos:
    db.voos.count(
    { 
      natureza: "Doméstica",
      "empresa.nome": "PASSAREDO",
    },
  ) },
);

db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  { _id: 0 },
);
